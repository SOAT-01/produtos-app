import {
    varchar,
    decimal,
    timestamp,
    uuid,
    boolean,
    pgSchema,
} from "drizzle-orm/pg-core";

export const produtoSchema = pgSchema("produto");

export const ProdutoSchema = produtoSchema.table("produtos", {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    nome: varchar("name", { length: 256 }).notNull(),
    preco: decimal("preco", { precision: 10, scale: 2 }).notNull(),
    categoria: varchar("categoria", { length: 256 }).notNull(),
    descricao: varchar("descricao", { length: 256 }),
    imagem: varchar("imagem", { length: 256 }),
    deleted: boolean("deleted").default(false),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});
