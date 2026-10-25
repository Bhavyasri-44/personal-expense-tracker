import { index, pgTable, serial, text, numeric, date, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const transactionsTable = pgTable("transactions", {
  id: serial("id").primaryKey(),
  userId: text("user_id"),
  type: text("type", { enum: ["income", "expense"] }).notNull(),
  description: text("description").notNull(),
  amount: numeric("amount", { precision: 12, scale: 2, mode: "number" }).notNull(),
  category: text("category", {
    enum: ["Food", "Travel", "Shopping", "Education", "Bills", "Salary", "Allowance", "Other"],
  }).notNull(),
  date: date("date", { mode: "string" }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => [index("transactions_user_id_idx").on(table.userId)]);

export const insertTransactionSchema = createInsertSchema(transactionsTable).omit({
  id: true,
  createdAt: true,
});

export type InsertTransaction = z.infer<typeof insertTransactionSchema>;
export type Transaction = typeof transactionsTable.$inferSelect;
