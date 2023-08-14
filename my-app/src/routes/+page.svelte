<nav>
	<a href="/">Home</a>
	<a href="/login">Login</a>
</nav>

<script lang="ts">
  let users: User[] = [
    { id: 1, name: 'SunTzu', password: '123456', active: true },
    { id: 2, name: 'Kaizen', password: '123456', active: true },
    { id: 3, name: 'Jhon', password: '123456', active: true },
  ];

  interface User {
    id: number;
    name: string;
	password: string;
	active: boolean;
  }

  let editingUser: User | null = null;
  let newUser: User | null = null;

  function editUser(user: User){
	editingUser = user; //Editar usuario
	localStorage.setItem('users', JSON.stringify(users)); //Actualizar datos en el localStorage
  }

  function cancelEdit(){
	editingUser = null; //Cancelar por si no deseas guardar la edición
  }

  function saveEdit(user: User){
	editingUser = null; //Guardar edición
  }

  function deleteUser(id: number) {
    const confirmed = confirm('¿Estás seguro de eliminar este usuario?');

    if (confirmed) {
      // Buscar el índice del usuario con el ID dado
      const index = users.findIndex(u => u.id === id);

      if (index !== -1) {
        // Cambiar el estado isActive a false
        users[index].active = false;
      }
    }
  }

  function addNewUser(){
	newUser = { id: users.length + 1, name: "", password: "", active: true};
	users = [...users, newUser];
	editingUser = newUser; //Agregar nuevo usuario
	localStorage.setItem('users', JSON.stringify(users)); //Actualizar datos en el localStorage
  }
</script>

<h1>Listado de Usuarios</h1>

<button class="btn btn-new" on:click={addNewUser}>Nuevo usuario</button>

<div class="center">
	<table>
		<thead>
		  <tr>
			<th>ID</th>
			<th>Usuario</th>
			<th>Contraseña</th>
			<th>Estado</th>
			<th>Opciones</th>
		  </tr>
		</thead>
		<tbody>
		  {#each users as user (user.id)}
			<tr>
			  <td>{user.id}</td>
			  <td>
				{#if editingUser === user}
					<input type="text" bind:value={user.name} />
				{:else}
					{user.name}
				{/if}
			  </td>
			  <td>
				{#if editingUser === user}
					<input type="text" bind:value={user.password} />
				{:else}
					{user.password}
				{/if}
			  </td>
			  <td>{user.active ? 'Activo': 'Inactivo'}</td>
			  <td class="options">
				{#if editingUser === user}
					<button class="btn btn-edit" on:click={() => saveEdit(user)}>Guardar</button>
					<button class="btn btn-delete" on:click={cancelEdit}>Cancelar</button>
				{:else}
					<button class="btn btn-edit" on:click={() => editUser(user)}>Editar</button>
					<button class="btn btn-delete" on:click={() => deleteUser(user.id)}>Eliminar</button>
				{/if}
			  </td>
			</tr>
		  {/each}
		</tbody>
	  </table>
</div>

<style>
	a{
		padding: 12px;
		text-align: left;
		color: firebrick;
		font-size: 1.5em;
	}
	h1 {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
		text-align: center;
	}

	.center {
		display: flex;
		justify-content: center;
	}

	table {
		border-collapse: collapse;
		width: 50%;
		margin: 0 auto;
	}

	th {
		padding: 8px;
		text-align: center;
		background-color: #f2f2f2;
		border: 1px;
		border-color: black;
		border-style: solid;
	}

	td {
		padding: 8px;
		text-align: center;
		border: 1px;
		border-color: black;
		border-style: solid;
	}

	tr:nth-child(even) {
		background-color: #f2f2f2;
	}
	.options {
		display: block;
		justify-content: space-between;
		align-items: center;
	}

	.btn {
		padding: 4px 8px;
		border: none;
		cursor: pointer;
	}

	.btn-edit {
		background-color: #007bff;
		color: white;
	}

	.btn-delete {
		background-color: #dc3545;
		color: white;
	}
	.btn-new{
		background-color: bisque;
		color: black;
		border: 1px;
		border-color: black;
		border-style: solid;
		margin-left: 200px;
		margin-bottom: 50px;
	}
</style>