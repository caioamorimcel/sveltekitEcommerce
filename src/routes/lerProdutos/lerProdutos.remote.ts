import { query } from '$app/server';
import { db } from '$lib/server/db';
import { tabelaProdutos } from '$lib/server/db/schema';

export const lerProdutos = query(async () => {
	const produtos = await db.select().from(tabelaProdutos);
	return produtos;
});
