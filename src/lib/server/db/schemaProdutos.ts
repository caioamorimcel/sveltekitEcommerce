import { decimal, integer, pgTable, text, varchar } from 'drizzle-orm/pg-core';

export const tabelaProdutos = pgTable('tabelaProdutos', {
	idProdutos: text()
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	campoDescricao: varchar().notNull(),
	campoPreco: decimal({ precision: 10, scale: 2 })
});
