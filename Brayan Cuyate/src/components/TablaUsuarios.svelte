<script lang="ts">
  // DATOS DE USUARIOS YA DETERMINADOS
  let usuarios =[
    {
    user_id: 1,
    username: "SunTzu",
    password: "123456",
    active: true
    },
    {
    user_id: 2,
    username: "Kaizen",
    password: "654321",
    active: false
    },
    {
    user_id: 3,
    username: "Veronica",
    password: "7512654",
    active: true
    },
    {
    user_id: 4,
    username: "Pedro123",
    password: "pololo4854",
    active: false
    }
  ]
  // VARIABLES BOOLEANAS
  let ModalVisible = false;
  let error = false;
  let edit=false;
  // VARIABLE DE USUARIO VACIA
  let data ={
    user_id: 0,
    username: "",
    password: "",
    active: true
    }
  // COPIA DE DATA
  let dataoriginal=JSON.parse(JSON.stringify(data));
  // FUNCIÓN AGREGAR USUARIO
  // @ts-ignore
  const agregarUsuario = (e) => {
    e.preventDefault();
    if (!data.username || !data.password) {
      error = true;
      return;
    };

    if (usuarios.some(usuario => usuario.username === data.username)) {
      error = true;
      return;
    };

    const usuarioNuevo = {
      user_id: usuarios.length + 1,
      username: data.username,
      password: data.password,
      active: true
    };

    usuarios = usuarios.concat(usuarioNuevo);
    ModalVisible = false;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    data = {
      user_id: 0,
      username: "",
      password: "",
      active: true
    };
  };
  // FUNCIÓN ELIMINAR USUARIO
  // @ts-ignore
  const eliminarUsuario = (userId) =>{
    const usuario = usuarios.find(usuario => usuario.user_id === userId);
    if (usuario) {
      usuario.active = !usuario.active;
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      usuarios = [...usuarios];
    }
  }
  // FUNCIÓN EDITAR USUARIO
  // @ts-ignore
  const editUser = (userId) =>{
    edit=true;
    data=usuarios[userId-1]
  }
  // FUNCIÓN ACTUALIZAR USUARIO
  // @ts-ignore
  const actualizarUsuario = (e) =>{
    e.preventDefault();
    if (!data.username || !data.password) {
      error = true;

      return;
    };

    if (usuarios.some(usuario => usuario.username === data.username && usuario.user_id !== data.user_id)) {
      error = true;
      return;
    };

    let userDB = {
      user_id: data.user_id,
      username: data.username,
      password: data.password,
      active: data.active
    };
    edit=false;
    usuarios[userDB.user_id-1]=userDB;
    ModalVisible = false;
      data = {
        user_id: 0,
        username: "",
        password: "",
        active: true
    };
  }
</script>

<hr>
<style>
  .sticky-footer {
    min-height: calc(100vh - 161px); /* Resta la altura del footer */
  }
  .sticky-table{
    max-height: calc(100vh - 322px);
  }
</style>
<section class="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 sticky-footer" >
  <button class="px-4 py-2 mx-10 mt-16 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm text-center mr-2 mb-2 " on:click={() => {ModalVisible = true,error=false}}>
    Nuevo Usuario
  </button>
  
  <div class="w-full px-10 mt-5 sticky-table overflow-y-auto">
    <table id="tablaUsuarios" class="w-full table-auto ">
        <thead>
          <tr class="text-white h-12">
            <th class="bg-gray-500 border-y-4 border-l-4 border-r-4 border-blue-500 px-4 py-2 ">ID</th>
            <th class="bg-gray-500 border-y-4 border-r-4 border-blue-500 px-4 py-2">Usuario</th>
            <th class="bg-gray-500 border-y-4 border-r-4 border-blue-500 px-4 py-2">Contraseña</th>
            <th class="bg-gray-500 border-y-4 border-r-4 border-blue-500 px-4 py-2">Estado</th>
            <th class="bg-gray-500 border-y-4 border-r-4 border-blue-500 px-4 py-2 w-24">Opciones</th>
          </tr>
        </thead>
        <tbody>
        {#each usuarios as usuario, index}
            <tr class="h-12 font-semibold text-center {index%2 === 0? 'bg-gray-300' : 'bg-gray-400'} {index === usuarios.length - 1 ? 'border-b-4 border-blue-500' : ''}">
              <td class="px-4 py-2 border-l-4 border-r-4 border-blue-500">{usuario.user_id}</td>
              <td class="px-4 py-2 border-l-4 border-r-4 border-blue-500">{usuario.username}</td>
              <td class="px-4 py-2 border-l-4 border-r-4 border-blue-500">{usuario.password}</td>
              <td class="px-4 py-2 border-l-4 border-r-4 border-blue-500 {usuario.active ? 'bg-green-400' : 'bg-red-400'}">{usuario.active ? 'Activo' : 'Inactivo'}</td>
              <td class="px-4 border-l-4 border-r-4 border-blue-500 justify-between">
                <div class="flex">
                  <button class="block m-2 text-black transform bg-transparent rounded-full motion-safe:hover:scale-150 hover:bg-gray-100 hover:bg-opacity-10 outline-none ring ring-white ring-opacity-50"
                  aria-label="Editar" title="Editar Usuario" on:click={() => {editUser(usuario.user_id),ModalVisible = true,error=false}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path d="M17.263 2.177a1.75 1.75 0 0 1 2.474 0l2.586 2.586a1.75 1.75 0 0 1 0 2.474L19.53 10.03l-.012.013L8.69 20.378a1.753 1.753 0 0 1-.699.409l-5.523 1.68a.748.748 0 0 1-.747-.188.748.748 0 0 1-.188-.747l1.673-5.5a1.75 1.75 0 0 1 .466-.756L14.476 4.963ZM4.708 16.361a.26.26 0 0 0-.067.108l-1.264 4.154 4.177-1.271a.253.253 0 0 0 .1-.059l10.273-9.806-2.94-2.939-10.279 9.813ZM19 8.44l2.263-2.262a.25.25 0 0 0 0-.354l-2.586-2.586a.25.25 0 0 0-.354 0L16.061 5.5Z">
                      </path>
                    </svg>
                  </button>
                  <button class="block m-2 text-black transform bg-transparent rounded-full motion-safe:hover:scale-150 hover:bg-gray-100 hover:bg-opacity-10 outline-none ring ring-white ring-opacity-50"
                  aria-label="Eliminar" title="Eliminar Usuario" on:click={()=>{eliminarUsuario(usuario.user_id)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path d="M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75Zm-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25ZM4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226L4.997 6.178Z"></path><path d="M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z"></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
        {/each}
        </tbody>
    </table>
  </div>
  {#if ModalVisible}
    <div class="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-900 ">
      <div class="bg-white p-6 rounded shadow-md relative   w-full max-w-md max-h-full">
        {#if edit === false}
          <h2 class="mb-4 text-xl font-medium text-gray-900 ">Agregar Nuevo Usuario</h2>
        {:else}
          <h2 class="text-lg font-semibold mb-4">Editar Usuario</h2>
        {/if}
          <form class="space-y-6">
            <fieldset>
                <label class="block mb-2 text-sm font-medium text-gray-900 " for="username">Username</label>
                <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" bind:value={data.username} type="text" placeholder="Ingrese Usuario" required>
                <label class="block mb-2 text-sm font-medium text-gray-900 " for="password">Contraseña</label>
                <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" bind:value={data.password} type="password" placeholder="••••••••" required>
            </fieldset>
            {#if error}
              <p>Error, campos vacíos o usuario ya registrado, intente de nuevo</p>
            {/if}
            {#if edit === false}
            <button type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" on:click={agregarUsuario} >Agregar</button>
            {:else}
            <button type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" on:click={actualizarUsuario} >Actualizar</button>
            {/if}
            <button type="button" class="w-full text-gray-700  bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" on:click={() => {ModalVisible = false;error=false,edit=false,data=dataoriginal}}>Cancelar</button>
          </form>
      </div>
    </div>
  {/if}
</section>
