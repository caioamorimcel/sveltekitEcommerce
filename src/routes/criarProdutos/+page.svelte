<script lang="ts">
	import Swal from 'sweetalert2';
	import { criarProduto } from './criarProduto.remote';

	$effect(() => {
		if (criarProduto.result?.sucesso === true) {
			Swal.fire({
				position: 'center',
				icon: 'success',
				showConfirmButton: false,
				timer: 1500
			});
		}
	});
</script>

<form {...criarProduto}>
	<div>
		<label for="campoDescricao">DESCRIÇÃO:</label>
		<input
			id="campoDescricao"
			name="campoDescricao"
			placeholder="Escreva a descrição aqui..."
			maxlength="2000"
			required
			style="text-transform: uppercase;"
		/>
	</div>
	<div>
		<label for="campoPreco">PREÇO:</label>
		<input id="campoPreco" name="campoPreco" required />
	</div>
	{#each criarProduto.fields.campoPreco.issues() as issue, i (i)}
		<div style="color:red;">{issue.message}</div>
	{/each}
	<button type="submit">CADASTRAR</button>
</form>
