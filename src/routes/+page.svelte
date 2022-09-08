<script lang="ts">
	import TextContent from '$lib/content/TextContent.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>joonas.codes</title>
	<meta name="description" content="Joonas Salojärvi Portfolio" />
</svelte:head>

<div class="content-container">
{#each data.content as paragraph}
	<TextContent paragraph={paragraph}/>
{/each}
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
	.content-container {
		background-color: #050505;
		padding: 1em;
		border: #2a752a solid 2px;
	}

	h2 {
		font-size: 18px;
		margin-top: 1.5em;
	}

	h2:nth-child(1) {
		margin-top: 1px;
	}

	p {
		font-size: 12px;
	}
</style>
