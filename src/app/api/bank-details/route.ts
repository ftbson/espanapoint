import { NextResponse } from "next/server";
import { db } from "@/db";
import { bankDetails } from "@/db/schema";
import { eq } from "drizzle-orm";
import { hasValidAdminSession } from "@/lib/admin-auth";


// Récupérer les coordonnées bancaires
export async function GET() {
  try {
    const details = await db.select().from(bankDetails).where(eq(bankDetails.id, 1)).get();
    // Toujours retourner les clés beneficiary, iban, bic même si vide
    return NextResponse.json(details || { beneficiary: "", iban: "", bic: "" });
  } catch (error) {
    console.error("Error loading bank details:", error);
    return NextResponse.json({ error: "Error al cargar datos" }, { status: 500 });
  }
}

// Mettre à jour (ou Créer si inexistante) les coordonnées bancaires
export async function PUT(req: Request) {
  if (!hasValidAdminSession(req)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    const { beneficiary, iban, bic } = await req.json();
    
    await db.insert(bankDetails)
      .values({ id: 1, beneficiary, iban, bic })
      .onConflictDoUpdate({
        target: bankDetails.id,
        set: { beneficiary, iban, bic }
      });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating bank details:", error);
    return NextResponse.json({ error: "Error al actualizar" }, { status: 500 });
  }
}