<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { lerProdutos } from './lerProdutos.remote';
	const produtos = await lerProdutos();
</script>

<div>
	<button onclick={() => goto(resolve('/criarProdutos'))}>CRIAR PRODUTO</button>
</div>

<br />

{#each produtos as produto (produto.idProdutos)}
	<div>
		{produto.campoDescricao} - {produto.campoPreco}
	</div>
{/each}
