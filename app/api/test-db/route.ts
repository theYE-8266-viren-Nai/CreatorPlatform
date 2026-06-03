import sql from "@/lib/db";

export async function GET() {
  try {
    const result = await sql`SELECT 1 AS connected`;
    return Response.json({ success: true, result });
  } catch (error) {
    return Response.json({ success: false, error: String(error) });
  }
}