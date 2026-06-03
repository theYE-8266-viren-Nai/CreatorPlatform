import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" }); // manually load it


export default defineConfig({
  out: './drizzle',
  schema: './db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEON!,
  },
});
