import pg from "pg";
import { config } from "dotenv";
const { Pool } = pg;

config();

export const pool = new Pool({
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  idleTimeoutMillis: 7200,
  ssl: true,
});
