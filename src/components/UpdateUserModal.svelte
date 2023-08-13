<script lang="ts">
	import { users } from '$lib/userStore';

	export let user: {
		user_id: number;
		username: string;
		password: string;
		active: boolean;
	};

	let showModal = false;
	let username = '';
	let password = '';

	function openModal() {
		username = user.username;
		password = user.password;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}

	function updateUser() {
		const updatedUser = {
			user_id: user.user_id,
			username: username,
			password: password,
			active: true
		};

		users.update((userList) => userList.map((u) => (u.user_id === user.user_id ? updatedUser : u)));
		username = '';
		password = '';

		closeModal();
	}
</script>

{#if showModal}
	<div class="fixed inset-0 flex items-center justify-center z-50">
		<div class="bg-black p-6 rounded-lg shadow-lg">
			<h2 class="text-xl font-semibold mb-4">Actualizar Usuario</h2>

			<form on:submit={updateUser}>
				<label for="username" class="text-left">Usuario</label>
				<input type="text" id="username" class="text-black" bind:value={username} />
				<label for="password" class="text-left">Contraseña</label>
				<input type="text" id="password" class="text-black" bind:value={password} />

				<div class="mt-4 flex justify-between">
					<button
						class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
						type="submit"
					>
						Actualizar
					</button>
					<button
						class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
						on:click={closeModal}
					>
						Cerrar
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}
<button class="text-blue-600 hover:text-blue-900 mr-2" on:click={openModal}> Editar </button>
