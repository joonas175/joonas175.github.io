<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>© { new Date().getFullYear() } Joonas Salojärvi</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 2rem;
		width: 100%;
		max-width: 768px;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: transparent;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px 0px;
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
	}

	footer a {
		font-weight: bold;
	}

	footer p {
		margin: 0;
	}

	@media (min-width: 480px) {
		footer {
			padding: 10px 0;
		}
	}
</style>
