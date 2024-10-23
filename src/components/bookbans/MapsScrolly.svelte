<script>
	import { getContext } from "svelte";
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import M4LMap from "$components/bookbans/M4LMap.svelte";
	import BookBanMap from "$components/bookbans/BookBanMap.svelte";

	const copy = [
		{ value: "PEN tracked 6,000 book bans." },
		{ value: "Nearly half have a Moms for Liberty chapter." },
		{ value: "They've been spreading. Fast." },
	];

	let scrollIndex = 0; // Initialize scrollIndex
	let steps = [0, 1, 2];
</script>

<section id="scrolly">
	<div class="sticky">
		<div class="flex-container">
			{#if scrollIndex === 0}
				<img src="/assets/images/book_1.png" alt="Book 1" />
			{:else if scrollIndex === 1}
				<img src="/assets/images/book_2.png" alt="Book 2" />
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
	</div>
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
		min-height: 100vh; /* Keep full viewport height */
		z-index: 1;
		overflow-x: hidden;
		display: flex;
		flex-direction: column; /* Change to column to stack elements */
		align-items: center; /* Center align the items */
	}

	.spacer {
		height: 75vh; /* Spacer for scrolling */
	}

	.step {
		height: 100vh; /* Full viewport height for each step */
		text-align: center;
		z-index: 1000;
		max-width: 30rem;
		margin: 0 auto;
	}

	.step-inner {
		padding: 1rem;
		background-color: white;
		border: 1px solid black;
	}

	.flex-container {
		display: flex;
		flex-direction: row; /* Change this to row if needed */
		height: 100vh; /* Ensure each step can take the full height */
		width: 100%; /* Ensure full width */
		justify-content: center; /* Center the content */
		align-items: center; /* Center the content */
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
