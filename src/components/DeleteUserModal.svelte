<script lang="ts">
	import { users } from '$lib/userStore';

	export let user: {
		user_id: number;
		username: string;
		password: string;
		active: boolean;
	};

	let showModal = false;
	let showInactiveMessage = false;

	function openModal() {
		if (user.active) {
			showModal = true;
		} else {
			showInactiveMessage = true;
		}
	}

	function closeModal() {
		showModal = false;
		showInactiveMessage = false;
	}

	function deleteUser() {
		const updatedUser = {
			user_id: user.user_id,
			username: user.username,
			password: user.password,
			active: false
		};

		users.update((userList) => userList.map((u) => (u.user_id === user.user_id ? updatedUser : u)));
		console.log($users);
		closeModal();
	}
</script>

{#if showModal}
	<div class="fixed inset-0 flex items-center justify-center z-50">
		<div class="bg-black p-6 rounded-lg shadow-lg">
			<h2 class="text-xl font-semibold mb-4">Eliminar Usuario</h2>
			<p>¿Estás seguro de que deseas eliminar al usuario {user.username}?</p>
			<div class="mt-4 flex justify-between">
				<button
					class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
					on:click={deleteUser}
				>
					Eliminar
				</button>
				<button
					class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
					on:click={closeModal}
				>
					Cerrar
				</button>
			</div>
		</div>
	</div>
{:else if showInactiveMessage}
	<div class="fixed inset-0 flex items-center justify-center z-50">
		<div class="bg-black p-6 rounded-lg shadow-lg">
			<h2 class="text-xl font-semibold mb-4">Eliminar Usuario</h2>
			<p>No se puede eliminar un usuario inactivo.</p>
			<div class="mt-4 flex justify-center">
				<button
					class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
					on:click={closeModal}
				>
					Cerrar
				</button>
			</div>
		</div>
	</div>
{/if}
<button class="text-red-600 hover:text-red-900" on:click={openModal}> Borrar </button>
