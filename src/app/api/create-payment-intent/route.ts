import { NextResponse } from "next/server";
import Stripe from "stripe";
import { resolveCheckoutItems } from "@/lib/products";
import { db } from "@/db";
import { orders } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    if (typeof body !== "object" || body === null || !("items" in body) || !("orderId" in body)) {
      return NextResponse.json({ error: "Datos de pago no válidos" }, { status: 400 });
    }

    const orderId = body.orderId;
    const checkout = resolveCheckoutItems(body.items);
    if (
      typeof orderId !== "string" ||
      orderId.length < 1 ||
      orderId.length > 80 ||
      !checkout
    ) {
      return NextResponse.json({ error: "Pedido o productos no válidos" }, { status: 400 });
    }

    const order = await db.select().from(orders).where(eq(orders.id, orderId)).get();
    if (
      !order ||
      order.status !== "Pendiente de pago" ||
      Math.round(order.total * 100) !== checkout.totalCents
    ) {
      return NextResponse.json({ error: "El pedido no coincide con los productos" }, { status: 400 });
    }

    if (checkout.totalCents < 50) {
      return NextResponse.json({ error: "El monto mínimo es de 0.50 €" }, { status: 400 });
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "El pago con tarjeta no está disponible" }, { status: 503 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: checkout.totalCents,
      currency: "eur",
      metadata: { orderId },
      automatic_payment_methods: { enabled: true },
    }, {
      idempotencyKey: `order-${orderId}`,
    });

    return NextResponse.json(
      { clientSecret: paymentIntent.client_secret },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("Stripe payment intent error:", error);
    return NextResponse.json(
      { error: "No se pudo preparar el pago. Inténtelo de nuevo." },
      { status: 500 }
    );
  }
}