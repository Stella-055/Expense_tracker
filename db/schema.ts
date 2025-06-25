// db/schema.ts

import { pgTable, serial, varchar,integer}from 'drizzle-orm/pg-core';

export const Budget = pgTable('budgets', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  amount: varchar('amount').notNull(),
  icon: varchar('icon'),
  createdBy: varchar('created_by', { length: 256 }).notNull(),
});
export const Expenses = pgTable('expenses',{

  id:serial('id').primaryKey(),
  name:varchar("name").notNull(),
  amount:varchar("numeric").default("0"),
  budget:integer("budgetId").references(()=> Budget.id),
  createdAt:varchar("createdAt").notNull()
})
