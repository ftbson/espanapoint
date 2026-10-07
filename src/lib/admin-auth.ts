import { createHash, createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_SESSION_COOKIE = "espanapoint_admin_session";
const SESSION_MAX_AGE_SECONDS = 8 * 60 * 60;

function equalSecret(left: string, right: string): boolean {
  const leftHash = createHash("sha256").update(left).digest();
  const rightHash = createHash("sha256").update(right).digest();
  return timingSafeEqual(leftHash, rightHash);
}

export function validateAdminCredentials(
  username: unknown,
  password: unknown
): boolean {
  const expectedUsername = process.env.ADMIN_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (
    !expectedUsername ||
    !expectedPassword ||
    typeof username !== "string" ||
    typeof password !== "string"
  ) {
    return false;
  }

  return (
    equalSecret(username, expectedUsername) &&
    equalSecret(password, expectedPassword)
  );
}

export function createAdminSessionToken(): string | undefined {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) return undefined;

  const expiresAt = String(Date.now() + SESSION_MAX_AGE_SECONDS * 1000);
  const signature = createHmac("sha256", secret)
    .update(expiresAt)
    .digest("base64url");

  return `${expiresAt}.${signature}`;
}

export function hasValidAdminSession(request: Request): boolean {
  const secret = process.env.ADMIN_SESSION_SECRET;
  const cookieHeader = request.headers.get("cookie");
  if (!secret || !cookieHeader) return false;

  const cookie = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${ADMIN_SESSION_COOKIE}=`));
  const token = cookie?.slice(ADMIN_SESSION_COOKIE.length + 1);
  const [expiresAt, signature] = token?.split(".") ?? [];
  if (!expiresAt || !signature || !/^\d+$/.test(expiresAt)) return false;
  if (Number(expiresAt) <= Date.now()) return false;

  const expected = createHmac("sha256", secret)
    .update(expiresAt)
    .digest();
  let provided: Buffer;
  try {
    provided = Buffer.from(signature, "base64url");
  } catch {
    return false;
  }

  return provided.length === expected.length && timingSafeEqual(provided, expected);
}

export const adminSessionMaxAge = SESSION_MAX_AGE_SECONDS;
