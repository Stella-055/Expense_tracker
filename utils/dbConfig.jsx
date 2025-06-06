import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
require('dotenv').config();
console.log('DATABASE_URL:', process.env.DATABASE_URL);

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });


