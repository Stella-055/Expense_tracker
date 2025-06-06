// db/schema.ts
import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const Budget = pgTable('budgets', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  amount: varchar('amount').notNull(),
  icon: varchar('icon'),
  createdBy: varchar('created_by', { length: 256 }).notNull(),
});
