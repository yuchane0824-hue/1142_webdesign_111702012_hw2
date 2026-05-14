const UPSTREAM = process.env.BACKEND_URL ?? "http://localhost:3005/";

export async function GET() {
  try {
    const upstream = await fetch(UPSTREAM, { cache: "no-store" });
    const body = await upstream.text();
    const contentType =
      upstream.headers.get("content-type") ?? "application/json";

    return new Response(body, {
      status: upstream.status,
      headers: { "content-type": contentType },
    });
  } catch {
    return Response.json(
      { error: "Upstream request failed" },
      { status: 502 },
    );
  }
}
