import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

if (!process.env.NEON) {
  throw new Error("NEON environment variable is not set");
}

const sql = neon(process.env.NEON!);
export const db = drizzle({ client: sql });