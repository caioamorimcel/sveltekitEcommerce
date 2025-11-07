import { form } from '$app/server';
import { db } from '$lib/server/db';
import { tabelaProdutos } from '$lib/server/db/schema';
// import { redirect } from '@sveltejs/kit';
import * as v from 'valibot';

const schema = v.object({
	campoDescricao: v.pipe(
		v.string(),
		v.nonEmpty(),
		v.transform((valor) => valor.toUpperCase())
	),
	campoPreco: v.pipe(
		v.string(),
		v.regex(/^\d+(\.\d{1,2})?$/, 'Digite um preço válido, com até duas casas decimais.')
	)
});

export const criarProduto = form(schema, async (dados) => {
	await db.insert(tabelaProdutos).values(dados);

	// redirect(303, `/`);
	return { sucesso: true };
});
