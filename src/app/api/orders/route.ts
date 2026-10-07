import { NextResponse } from "next/server";
import { db } from "@/db";
import { orders, orderItems } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { Resend } from "resend";
import { resolveCheckoutItems } from "@/lib/products";
import { hasValidAdminSession } from "@/lib/admin-auth";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// GET : Récupérer toutes les commandes avec les infos client
export async function GET(request: Request) {
  if (!hasValidAdminSession(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    const dbOrders = await db.select().from(orders).orderBy(desc(orders.date));

    const result = await Promise.all(
      dbOrders.map(async (order) => {
        const items = await db
          .select()
          .from(orderItems)
          .where(eq(orderItems.orderId, order.id));
          
        return {
          ...order,
          items,
        };
      })
    );

    return NextResponse.json(result, {
      headers: { "Cache-Control": "private, no-store" },
    });
  } catch (error) {
    console.error("Error en GET /api/orders:", error);
    return NextResponse.json(
      { error: "Error al recuperar los pedidos" },
      { status: 500 }
    );
  }
}

// POST : Créer une commande avec les données de livraison et envoyer la notification e-mail
export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    if (!isRecord(body) || !("items" in body)) {
      return NextResponse.json(
        { error: "Datos incompletos para procesar el pedido" },
        { status: 400 }
      );
    }

    const { id, customerName, country, city, address, whatsapp, email } = body;
    const checkout = resolveCheckoutItems(body.items);
    if (
      typeof id !== "string" ||
      !/^[a-zA-Z0-9-]{1,80}$/.test(id) ||
      !checkout ||
      typeof customerName !== "string" ||
      typeof country !== "string" ||
      typeof city !== "string" ||
      typeof address !== "string" ||
      typeof whatsapp !== "string" ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Los datos del pedido no son válidos" },
        { status: 400 }
      );
    }

    const orderDate = new Date().toISOString();
    const total = checkout.totalCents / 100;
    const items = checkout.items.map(({ product, quantity }) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      category: product.category,
      image: product.image,
    }));

    await db.insert(orders).values({
      id,
      date: orderDate,
      total,
      status: "Pendiente de pago",
      customerName: customerName.trim(),
      country: country.trim(),
      city: city.trim(),
      address: address.trim(),
      whatsapp: whatsapp.trim(),
      email: email.trim(),
    });

    for (const item of items) {
      await db.insert(orderItems).values({
        orderId: id,
        productId: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        category: item.category,
        image: item.image || "",
      });
    }

    const escapeHtml = (value: string) =>
      value.replace(/[&<>"']/g, (character) => {
        const entities: Record<string, string> = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        };
        return entities[character];
      });
    const itemsTableRows = items
      .map((item) => `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(item.name)}</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: center;">x${item.quantity}</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">${item.price.toFixed(2)} €</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right; font-weight: bold;">${(item.price * item.quantity).toFixed(2)} €</td>
          </tr>`)
      .join("");

    let notificationSent = false;
    const recipient = process.env.ADMIN_EMAIL;
    const sender = process.env.RESEND_FROM_EMAIL;
    if (process.env.RESEND_API_KEY && recipient && sender) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
        from: sender,
        to: recipient,
        subject: `Nueva orden recibida #${id} - ${customerName || "Cliente"}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px;">
            <h2 style="color: #0070f3; text-align: center; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">
              ¡Nuevo Pedido Recibido! 🎉
            </h2>

            <div style="margin-bottom: 20px;">
              <p><strong>ID de Pedido:</strong> #${id}</p>
              <p><strong>Fecha:</strong> ${orderDate}</p>
            </div>

            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
              <h3 style="margin-top: 0; color: #111;">👤 Datos del Cliente</h3>
              <p style="margin: 5px 0;"><strong>Nombre:</strong> ${escapeHtml(customerName.trim())}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
              <p style="margin: 5px 0;"><strong>WhatsApp:</strong> ${escapeHtml(whatsapp.trim())}</p>
              <p style="margin: 5px 0;"><strong>Ubicación:</strong> ${escapeHtml(`${city}, ${country}`)}</p>
              <p style="margin: 5px 0;"><strong>Dirección:</strong> ${escapeHtml(address)}</p>
            </div>

            <h3 style="color: #111;">🛒 Artículos Comprados</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
              <thead>
                <tr style="background-color: #0070f3; color: #ffffff; text-align: left;">
                  <th style="padding: 8px;">Producto</th>
                  <th style="padding: 8px; text-align: center;">Cantidad</th>
                  <th style="padding: 8px; text-align: right;">Precio Unit.</th>
                  <th style="padding: 8px; text-align: right;">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                ${itemsTableRows}
              </tbody>
            </table>

            <div style="text-align: right; background-color: #eaf5ea; padding: 10px; border-radius: 6px;">
              <span style="font-size: 16px;">Monto Total a Recibir: </span>
              <strong style="font-size: 20px; color: #2ecc71;">${total.toFixed(2)} €</strong>
            </div>
          </div>
        `,
        });
        notificationSent = true;
      } catch (emailError) {
        console.error("Error enviando el correo de pedido:", emailError);
      }
    } else {
      console.error("Notificación de pedido desactivada: falta configurar Resend y sus direcciones.");
    }

    return NextResponse.json({ success: true, orderId: id, notificationSent }, { status: 201 });
  } catch (error) {
    console.error("Error en POST /api/orders:", error);
    return NextResponse.json(
      { error: "Error al crear el pedido" },
      { status: 500 }
    );
  }
}