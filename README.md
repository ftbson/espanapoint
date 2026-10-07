# Espanapoint

E-commerce site built with Next.js 16, React 19, Stripe, Turso and Drizzle.

## Development

```bash
npm install
npm run dev
```

Run `npm run lint` and `npm run build` before deployment.

## Environment configuration

Configure secrets in the deployment environment (or an ignored local
`.env.local` file). Never expose administrator credentials using a
`NEXT_PUBLIC_` variable.

Required for order storage:

- `TURSO_DATABASE_URL`
- `TURSO_AUTH_TOKEN`

Required for the administrator panel:

- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET` — a private, high-entropy signing secret

Required to enable card payments:

- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

The contact form and order email notifications require:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL` — a sender address verified with Resend
- `ADMIN_EMAIL` — the order notification recipient

The panel is at `/admin`. Its session is stored in an HttpOnly, SameSite
cookie and expires after eight hours.

## Search and product data

- Product details use `/produits/<product-slug>-<id>` URLs. Legacy numeric
  product URLs redirect to the canonical product URL.
- `/sitemap.xml` and `/robots.txt` are generated from the site's routes.
- `/feed.xml` contains only products whose required Merchant Center facts are
  explicitly available in `src/lib/products.ts`. No identifier, price state,
  product condition or stock status is fabricated.
- A product marked `refurbished` is emitted only if its professional
  refurbishment and warranty are also explicitly recorded.

Before submitting products to Google Merchant Center, enter and verify actual
stock availability, condition, brand and complete descriptions for each
product. GTIN and MPN are emitted only when supplied in the product record.
