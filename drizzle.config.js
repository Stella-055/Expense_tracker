/** @type {import('drizzle-kit').Config} */


module.exports = {
  schema: './utils/schema.jsx',
  out: './drizzle',
  driver: 'neon-http', // Correct driver for Neon PostgreSQL
  dialect: 'postgresql',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL ,
  },
};
