<script>
	import { getContext } from "svelte";
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import Books from "$components/bookbans/Books.svelte";

	const copy = [
		{ value: "Ever read a Judy Blume book? Or seen snapshots of Rupi Kaur’s short poems and minimalist art off her viral poetry collection Milk and Honey?" },
		{ value: "If you’re a student in Utah, you might be out of luck. The state recently banned 13 books, including those by the two authors, from all public school libraries and classrooms under a new law mandating the removal of books containing 'pornographic or indecent' material." },
		{ value: "Utah follows Florida and Texas in implementing state laws that accelerate book bans, an issue that has recently surged in unprecedented rates." },
		{ value: "Not neat, isn't it?" },
		{ value: "Sooooo many books." },
		{ value: "Here's all of the rest." },
	];

	let scrollIndex;
	let steps = [0, 1, 2, 3, 4, 5];
</script>

<section id="scrolly">
	<div class="sticky">
		<Books scrollIndex={scrollIndex} />
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
		z-index: 1000;
	}
	.sticky {
		position: sticky;
		top: 0;
		transition: all 1s;
		min-height: 100vh;
		max-width: 40rem;
		width: 100%;
		margin: 0 auto;  
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