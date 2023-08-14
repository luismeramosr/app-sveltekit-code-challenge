<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let username = "";
  let password = "";
  let error = "";

  /**
	 * @param {{ preventDefault: () => void; }} event
	 */
  function handleLogin(event) {
      event.preventDefault();

      if (username === "admin" && password === "12345") {
          // Usuario válido, disparamos el evento "login" con éxito
          alert('Inicio de sesión exitoso');
      } else {
          // Usuario inválido, mostramos mensaje de error
          error = "Nombre de usuario o contraseña incorrectos";
      }
  }
</script>

<div class="login-container">
  <h2 class="login-header">Iniciar Sesión</h2>
  {#if error}
    <p class="error-message">{error}</p>
  {/if}
  <form on:submit={handleLogin}>
      <label for="username">Nombre de Usuario:</label>
      <input type="text" id="username" class="login-input" bind:value={username} />
      <label for="password">Contraseña:</label>
      <input type="password" id="password" class="login-input" bind:value={password} />
      <button type="submit" class="login-button">Iniciar Sesión</button>
  </form>
</div>


<style>
  h2{
    color:indigo;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: center;
  }

  label{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    justify-content: center;
  }

  .login-container {
      max-width: 300px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
  }

  .login-header {
      font-size: 24px;
      margin-bottom: 10px;
  }

  .login-input {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
      justify-content: center;
  }

  .login-button {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
  }

  .login-button:hover {
      background-color: #0056b3;
  }

  .error-message {
      color: red;
      font-size: 14px;
      margin-top: 5px;
  }
</style>
