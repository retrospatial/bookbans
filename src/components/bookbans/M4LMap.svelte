<!-- source https://svelte.dev/repl/33d086ab38fb42c48c39bd5f191fb890?version=3.46.6 -->

<script>
	import { onMount } from 'svelte';
	import * as topojson from 'topojson-client';
	import { geoPath, geoAlbersUsa } from 'd3-geo';
	import { draw } from 'svelte/transition';
  import { csv } from 'd3-fetch';
	import { scaleSequential } from 'd3-scale';
	import { interpolateBlues } from 'd3-scale-chromatic';
	
	const projection = geoAlbersUsa().scale(1300).translate([487.5, 305]);
	const path = geoPath().projection(null);
	let states = [];
	let counties = [];
	let mesh;
	let selected;
	let data = [];
	
	const colorScale = scaleSequential(interpolateBlues).domain([0, 500]); // Adjust domain as needed
	
	onMount(async () => {
		// Fetch topojson data
		const us = await fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/counties-albers-10m.json')
			.then(d => d.json());
		
		// Load CSV data
		data = await csv("/assets/data/4_m4lmap.csv");
		
		// Parse the topojson features
		states = topojson.feature(us, us.objects.states).features;
		counties = topojson.feature(us, us.objects.counties).features;
		mesh = topojson.mesh(us, us.objects.states, (a, b) => a !== b);
	});

  function getColor(id) {
		const entry = data.find(d => d.county_fips === id.toString());
		if (entry) {
			// console.log(`County FIPS: ${entry.county_fips}, Accurate Members: ${entry.accurate_members}`);
      return '#007bff'

      // COLOR BY FACEBOOK MEMBER COUNT:
			// return colorScale(+entry.accurate_members);
		}
		// console.log(`No data found for ID: ${id}`);
		return '#fff'; 
	}

  function getCountyName(feature) {
    const countyName = feature.properties.name;  // Extract county name from TopoJSON properties
    const stateName = feature.properties.state;  // Assuming the state name is stored in 'state' property
    
    if (countyName && stateName) {
        return `${countyName} County, ${stateName}`;
    }
    return feature.properties.name;  // Fallback in case state name is not present
}


</script>

<svg viewBox="0 0 975 610">
	<!-- County above -->
	{#each counties as feature, i}
	  <path 
      d={path(feature)} 
      on:click={() => selected = feature} 
      on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && (selected = feature)}
			tabindex="0"
			role="button"
			aria-label="Select county"
      class="county"  
      stroke="rgb(0 0 0 / 10%)" 
      fill={getColor(feature.id)} />
	{/each}

	<!-- State below -->
	<g fill="none" stroke="black">
		{#each states as feature, i}
			<path 
        d={path(feature)} 
        on:click={() => selected = feature} 
        on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && (selected = feature)}
				tabindex="0"
				role="button"
				aria-label="Select state"
        class="state" 
        in:draw={{ delay: i * 50, duration: 1000 }} />
		{/each}
	</g>
		
	{#if selected}
		<path d={path(selected)} fill="hsl(0 0% 50% / 20%)" stroke="black" stroke-width={2} />
	{/if}
</svg>

<div class="selectedName">
  {#if selected}
    {getCountyName(selected)}
  {/if}
</div>	

<style>
  /* .state:hover {
		fill: hsl(0 0% 50% / 20%);
	} */

	.county:hover {
		/* fill: hsl(0 0% 50% / 20%); */
    stroke: black;
    stroke-width: 2;
	}
	
	.selectedName {
		text-align: center;
		margin-top: 8px;
		font-size: 1.5rem;
	}
</style>