import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  adminSessionMaxAge,
  createAdminSessionToken,
  hasValidAdminSession,
  validateAdminCredentials,
} from "@/lib/admin-auth";

export async function GET(request: Request) {
  return NextResponse.json(
    { authenticated: hasValidAdminSession(request) },
    { headers: { "Cache-Control": "no-store" } }
  );
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const credentials =
      typeof body === "object" && body !== null
        ? body as { username?: unknown; password?: unknown }
        : {};

    if (!process.env.ADMIN_SESSION_SECRET) {
      return NextResponse.json(
        { error: "El acceso de administración no está configurado en el servidor." },
        { status: 503 }
      );
    }

    if (!validateAdminCredentials(credentials.username, credentials.password)) {
      return NextResponse.json(
        { error: "Usuario o contraseña incorrectos." },
        { status: 401 }
      );
    }

    const token = createAdminSessionToken();
    if (!token) {
      return NextResponse.json(
        { error: "El acceso de administración no está configurado en el servidor." },
        { status: 503 }
      );
    }

    const response = NextResponse.json(
      { authenticated: true },
      { headers: { "Cache-Control": "no-store" } }
    );
    response.cookies.set(ADMIN_SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: adminSessionMaxAge,
    });
    return response;
  } catch (error) {
    console.error("Admin authentication request failed:", error);
    return NextResponse.json(
      { error: "No se pudo iniciar sesión." },
      { status: 400 }
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json({ authenticated: false });
  response.cookies.set(ADMIN_SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });
  return response;
}
