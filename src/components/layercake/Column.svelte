<script>
	import { getContext } from "svelte";
	import { fly } from "svelte/transition";

	const { data, xGet, yGet, yRange, xScale } = getContext("LayerCake");

	// Reactive width calculation based on the x values
	$: columnWidth = (d) => {
		const vals = $xGet(d);
		return Math.max(0, vals[1] - vals[0]); // Ensure width is non-negative
	};

	// Reactive height calculation based on yRange and y value
	$: columnHeight = (d) => {
		return Math.max(0, $yRange[0] - $yGet(d)); // Ensure height is non-negative
	};

	export let fill = "#ccc"; // Default fill color
	export let stroke = "#000"; // Default stroke color
	export let strokeWidth = 0; // Default stroke width
</script>

<g>
	{#each $data as d, i}
		{@const x = $xScale.bandwidth ? $xGet(d) : $xGet(d)[0]} // X position
		{@const y = $yGet(d)} // Y position
		{@const width = $xScale.bandwidth ? $xScale.bandwidth() : columnWidth(d)} // Column width
		{@const height = columnHeight(d)} // Column height
		<rect
			data-id={i} 
			{x}
			{y}
			{width}
			{height}
			fill={typeof fill === 'function' ? fill(d) : fill} 
			{stroke}
			stroke-width={strokeWidth}
			transition:fly={{ y: height, duration: 800, delay: i * 100}}
			style="transform-origin:bottom;"
		/>
	{/each}
</g>

// Check if the fill prop is part of a function, otherwise use the default fill value


