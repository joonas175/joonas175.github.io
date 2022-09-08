<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import logo from './svelte-logo.svg';
	import { onMount } from 'svelte';

	const charSet = Array.from(Array(95)).map((a, i) => i).map((i) => String.fromCharCode(i + 32));

	const title = "joonas.codes";

	let pointerOn = false;

	let pointerBlinkJob : NodeJS.Timeout | null = null;

	let hackermanRunning = false;

	let titleEl : HTMLHeadingElement;

	let broken = false;
	let fixed = false;

	export const pointerBlink = () => {
		if(pointerBlinkJob) {
			clearTimeout(pointerBlinkJob);
		}
		pointerBlinkJob = setTimeout(() => {
			pointerOn = !pointerOn;
			pointerBlink();
		}, 500);
	};

	export const checkForBrokenTitle = () => {
		const currentTitle = titleEl.innerText;
		if(currentTitle !== title?.substring(0, currentTitle.length)) {
			broken = true;
			fixed = false;
		} else if (broken && currentTitle === title) {
			broken = false;
			fixed = true;
			setTimeout(() => {
				fixed = false;
			}, 2000)
		}
	};

	export const hackerman = async (titlePart : String) => {
		checkForBrokenTitle();
		if(titlePart.length > 0 && hackermanRunning) {
			const charToMatch = titlePart.charAt(0);
			let i = 0;
			const originalTitle = titleEl.innerText;

			titleEl.innerText = originalTitle + charSet[i];
			let char = charSet[i];


			while(char !== charToMatch && hackermanRunning) {
				i++;
				char = charSet[i];
				titleEl.innerText = originalTitle + char;
				await new Promise((resolve) => setTimeout(resolve, 1));
			}

			hackerman(titlePart.substring(1));
		} else {
			pointerBlink();
			hackermanRunning = false;
		}
	};

	if(browser) {
		onMount(() => {
			if(titleEl && title.length > 1) {
				hackermanRunning = true;
				hackerman(title.substring(1));
			}
		});
	};

	export const resetTitle = () => {
		if(browser && titleEl) {
			if(pointerBlinkJob) {
				clearTimeout(pointerBlinkJob);
			}
			hackermanRunning = true;
			titleEl.innerText = title?.charAt(0);
			hackerman(title.substring(1));
		}
	};

</script>

<header>
	<div id="main-title-container" on:click={resetTitle}>
		<h1 id="main-title" bind:this={titleEl}>{ title?.charAt(0) }</h1>
		<svg class="pointer-container">
			{ #if pointerOn }
				<rect class="rect"></rect>
			{ /if }
		</svg>
	</div>

	<div style="height: 30px;">
		{#if broken}
			<h2>You broke the title :( pls fix</h2>
		{:else if fixed}
			<h2>Thanks :)</h2>
		{/if}
	</div>
	
	
	<nav data-sveltekit-prefetch>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a href="/">Home</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a href="/todos">Todos</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active a {
		color: #9ccc9c;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	#main-title-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.rect {
		fill: #149414;
		width: 20px;
		height: 40px;
	}

	.pointer-container {
		width: 20px;
		height: 40px;
		margin-left: 5px;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
