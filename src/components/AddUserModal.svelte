<script lang="ts">
	import { users } from '$lib/userStore';

	let showModal = false;
	let username = '';
	let password = '';

	function openModal() {
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}

	function addUser() {
		const existingUser = $users.find((user) => user.username === username);
		if (existingUser) {
			alert(`El usuario '${username}' ya existe. Por favor, elige otro nombre de usuario.`);
			return;
		}

		const newUser = {
			user_id: $users.length + 1,
			username: username,
			password: password,
			active: true
		};

		users.update((userList) => [...userList, newUser]);

		username = '';
		password = '';

		closeModal();
	}
</script>

{#if showModal}
	<div class="fixed inset-0 flex items-center justify-center z-50">
		<div class="bg-black p-6 rounded-lg shadow-lg">
			<h2 class="text-xl font-semibold mb-4">Agregar Nuevo Usuario</h2>

			<form on:submit={addUser}>
				<label for="username">Usuario</label>
				<input type="text" id="username" class="text-black" bind:value={username} />
				<label for="password">Contraseña</label>
				<input type="text" id="password" class="text-black" bind:value={password} />

				<div class="mt-4 flex justify-between">
					<button
						class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
						type="submit"
					>
						Agregar
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

<button
	class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
	on:click={openModal}
>
	Nuevo Usuario
</button>
