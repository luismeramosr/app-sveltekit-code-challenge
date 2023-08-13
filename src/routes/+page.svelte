<script lang="ts">
	import { onMount } from 'svelte';
	import { users } from '$lib/userStore';
	import AddUserModal from '../components/AddUserModal.svelte';
	import UpdateUserModal from '../components/UpdateUserModal.svelte';
	import DeleteUserModal from '../components/DeleteUserModal.svelte';
</script>

<div class="flex flex-col justify-center">
	<div class="grid grid-cols-1">
		<h1 class="text-center text-3xl font-bold py-5">Lista de Usuarios</h1>
	</div>
	<div class="ml-5">
		<AddUserModal />
	</div>
	<div class="mt-5">
		<table class="min-w-full">
			<thead>
				<tr>
					<th
						class="px-6 py-3 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
					>
						ID
					</th>
					<th
						class="px-6 py-3 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
					>
						Usuario
					</th>
					<th
						class="px-6 py-3 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
					>
						Contraseña
					</th>
					<th
						class="px-6 py-3 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
					>
						Estado
					</th>
					<th
						class="px-6 py-3 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
					>
						Opciones
					</th>
				</tr>
			</thead>
			<tbody>
				{#each $users as user}
					<tr>
						<td class="px-6 py-4 text-center whitespace-no-wrap">
							{user.user_id}
						</td>
						<td class="px-6 py-4 text-center whitespace-no-wrap">
							{user.username}
						</td>
						<td class="px-6 py-4 text-center whitespace-no-wrap">
							{user.password}
						</td>
						<td class="px-6 py-4 text-center whitespace-no-wrap">
							{user.active ? 'Activo' : 'Inactivo'}
						</td>
						<td class="px-6 py-4 text-center whitespace-no-wrap">
							<UpdateUserModal {user} />
							<DeleteUserModal {user} />
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
