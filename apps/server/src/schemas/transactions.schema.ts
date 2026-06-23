import z from "zod";
import { TransactionCategory, TransactionType } from "../../generated/prisma";

export const CreateTransactionSchema = z.object({
  value: z.number().positive(),
  description: z.string().nullable().default(null),
  type: z.enum(TransactionType),
  category: z.enum(TransactionCategory),
  userId: z.number().int().positive(),
  date: z.date(),
});

export type CreateTransactionType = z.infer<typeof CreateTransactionSchema>;
