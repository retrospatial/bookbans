<script>
	import { getContext } from "svelte";
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import M4LMap from "$components/bookbans/M4LMap.svelte";
	import BookBanMap from "$components/bookbans/BookBanMap.svelte";


	const copy = [
		{ value: "PEN tracked 6,000 book bans." },
		{ value: "Nearly half have a Moms for Liberty chapter. " },
		{ value: "They've been spreading. Fast." },
	];

	let scrollIndex;
	let steps = [0, 1, 2];
</script>

<section id="scrolly">
	<div class="sticky">
		{#if scrollIndex === 0}
			<BookBanMap /> <!-- Display BookBanMap when scrollIndex is 0 -->
		{:else if scrollIndex === 1}
			<M4LMap /> <!-- Display M4LMap when scrollIndex is 1 -->
		{/if}
	</div>
	<Scrolly bind:value={scrollIndex}>
		{#if copy.length > 0}
			{#each copy as text, i}
				<div class="step">
					<div class="step-inner">
						<p>{@html text.value}</p>
					</div>
				</div>
			{/each}
		{/if}
	</Scrolly>
	<div class="spacer" />
</section>

<style>
	#scrolly {
		position: relative;
		margin: 0;
		z-index: 1000;
	}
	.sticky {
		position: sticky;
		top: 0;
		transition: all 1s;
		min-height: 100vh;
		z-index: 1;
		overflow-x: hidden;
		pointer-events: none;
		display: flex;
		justify-content: center;
	}
	.spacer {
		height: 75vh;
	}
	.step {
		height: 100vh;
		text-align: center;
		z-index: 1000;
		max-width: 30rem;
		margin: 0 auto;
		pointer-events: none;
		position: relative;
	}

	.step-inner {
		padding: 1rem;
		background-color: white;
		border: 1px solid black;
	}

	:global(.step .strong) {
		color: black;
	}

	:global(.step) {
		color: black;
		font-family: var(--sans);
		font-weight: 700;
		padding: 0.25rem;
	}

	@media (max-width: 600px) {
		/* Add responsive styles here if needed */
	}
</style>