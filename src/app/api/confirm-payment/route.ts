import { NextResponse } from "next/server";
import Stripe from "stripe";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { orders } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    if (
      typeof body !== "object" ||
      body === null ||
      !("orderId" in body) ||
      !("paymentIntentId" in body) ||
      typeof body.orderId !== "string" ||
      typeof body.paymentIntentId !== "string"
    ) {
      return NextResponse.json({ error: "Datos de pago no válidos" }, { status: 400 });
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "El pago no está disponible" }, { status: 503 });
    }

    const order = await db
      .select()
      .from(orders)
      .where(eq(orders.id, body.orderId))
      .get();
    if (!order) {
      return NextResponse.json({ error: "Pedido no encontrado" }, { status: 404 });
    }
    if (order.status !== "Pendiente de pago" && order.status !== "Pagado (Stripe)") {
      return NextResponse.json({ error: "El pedido no admite esta confirmación" }, { status: 400 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const paymentIntent = await stripe.paymentIntents.retrieve(body.paymentIntentId);
    if (
      paymentIntent.status !== "succeeded" ||
      paymentIntent.currency !== "eur" ||
      paymentIntent.amount !== Math.round(order.total * 100) ||
      paymentIntent.metadata.orderId !== order.id
    ) {
      return NextResponse.json({ error: "El pago no coincide con el pedido" }, { status: 400 });
    }

    await db
      .update(orders)
      .set({ status: "Pagado (Stripe)" })
      .where(eq(orders.id, order.id));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Stripe payment confirmation error:", error);
    return NextResponse.json({ error: "No se pudo confirmar el pago" }, { status: 500 });
  }
}
