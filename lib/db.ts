import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.NEON!);

export default sql;