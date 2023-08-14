<nav>
	<a href="/">Home</a>
	<a href="/login">Login</a>
</nav>

<script>
	import Login from "./Login.svelte";
	import logo from '$lib/images/svelte-logo.png';
</script>

<section>
	<h1>
		<span class="logo">
			<picture>
				<img src="{logo}" alt="Logo" />
			</picture>
		</span>
	</h1>
</section>

<Login />

<style>
	a{
		padding: 12px;
		text-align: left;
		color: firebrick;
		font-size: 1.5em;
	}
	h1 {
		color:indigo;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
		text-align: center;
	}
	img {
        max-width: 200px; /* Ajusta el tamaño según tus preferencias */
        display: block;
        margin: 0 auto; /* Para centrar horizontalmente */
    }
</style>