import { NextResponse } from "next/server";
import { db } from "@/db";
import { orders } from "@/db/schema";
import { eq } from "drizzle-orm";
import { hasValidAdminSession } from "@/lib/admin-auth";

// Type strict demandé par les versions récentes de Next.js
type RouteParams = {
  params: Promise<{ id: string }>;
};

// PATCH : Modifier le statut d'un pedido
export async function PATCH(req: Request, { params }: RouteParams) {
  if (!hasValidAdminSession(req)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    const { status } = await req.json();
    if (
      typeof status !== "string" ||
      !["Pendiente de pago", "Pagado", "Cancelado"].includes(status)
    ) {
      return NextResponse.json({ error: "Estado de pedido no válido" }, { status: 400 });
    }
    const resolvedParams = await params; // On résout la promesse ici !

    const updated = await db
      .update(orders)
      .set({ status })
      .where(eq(orders.id, resolvedParams.id))
      .returning({ id: orders.id });
    if (updated.length === 0) {
      return NextResponse.json({ error: "Pedido no encontrado" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al actualizar el estado" }, { status: 500 });
  }
}

// DELETE : Supprimer un pedido
export async function DELETE(req: Request, { params }: RouteParams) {
  if (!hasValidAdminSession(req)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    const resolvedParams = await params; // On résout la promesse ici !

    await db.delete(orders).where(eq(orders.id, resolvedParams.id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al eliminar el pedido" }, { status: 500 });
  }
}