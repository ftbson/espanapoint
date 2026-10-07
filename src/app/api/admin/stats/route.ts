import { NextResponse } from "next/server";
import { db } from "@/db";
import { visits } from "@/db/schema";
import { sql } from "drizzle-orm";
import { hasValidAdminSession } from "@/lib/admin-auth";

export async function GET(request: Request) {
  if (!hasValidAdminSession(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    // Total des visites
    const totalResult = await db.select({ count: sql<number>`count(*)` }).from(visits);
    const totalVisits = totalResult[0]?.count || 0;

    // Groupement par pays pour avoir le top ou la liste des pays
    const countriesStats = await db
      .select({
        country: visits.country,
        count: sql<number>`count(*)`,
      })
      .from(visits)
      .groupBy(visits.country)
      .orderBy(sql`count(*) DESC`);

    return NextResponse.json(
      { totalVisits, countriesStats },
      { headers: { "Cache-Control": "private, no-store" } }
    );
  } catch (error) {
    console.error("Error loading admin visit statistics:", error);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}