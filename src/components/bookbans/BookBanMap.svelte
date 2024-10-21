<script>
	import { onMount } from 'svelte';
	import * as topojson from 'topojson-client';
	import { geoPath, geoAlbersUsa } from 'd3-geo';
	import { csv } from 'd3-fetch';
	import { scaleSequential } from 'd3-scale';
	import { interpolateReds } from 'd3-scale-chromatic';
	
		const projection = geoAlbersUsa().scale(1300).translate([487.5, 305]);
	const path = geoPath().projection(null);

	let states = [];
	let counties = [];
	let selected;
	let data = [];
	let selectedYear = null;  
	let activeButton = 'total'; 

	const colorScale = scaleSequential(interpolateReds).domain([0, 30]); // Adjust the domain based on your data

	onMount(async () => {
		const us = await fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/counties-albers-10m.json')
			.then(d => d.json());

		data = await csv("./src/data/5_banmap.csv", d => {
			return {
				...d,
				year: +d.year,
				count: +d.count
			};
		});

		states = topojson.feature(us, us.objects.states).features;
		counties = topojson.feature(us, us.objects.counties).features;
	});

	// Reactive color array for counties based on selectedYear
	$: countyColors = counties.map(feature => {
		let entry;
		if (selectedYear) {
			entry = data.find(d => d.county_fips === feature.id.toString() && +d.year === selectedYear);
		} else {
			entry = data.find(d => d.county_fips === feature.id.toString());
		}
		
		if (entry) {
			return { id: feature.id, color: colorScale(+entry.count) }; 
		}
		
		return { id: feature.id, color: '#fff' }; 
	});

	function getCountyName(feature) {
		const countyName = feature.properties.name;
		const stateName = feature.properties.state;
		return countyName && stateName ? `${countyName} County, ${stateName}` : feature.properties.name;
	}

	function selectYear(year, buttonId) {
		selectedYear = year;
		activeButton = buttonId; // Set the active button to the clicked one
		console.log("Selected Year:", selectedYear);
	}
</script>

<!-- Add year selection buttons -->
<div class="year-buttons">
	<button 
		class:active={activeButton === 'total'} 
		on:click={() => selectYear(null, 'total')}>
		Total
	</button>
	<button 
		class:active={activeButton === '2021'} 
		on:click={() => selectYear(2021, '2021')}>
		2021
	</button>
	<button 
		class:active={activeButton === '2022'} 
		on:click={() => selectYear(2022, '2022')}>
		2022
	</button>
	<button 
		class:active={activeButton === '2023'} 
		on:click={() => selectYear(2023, '2023')}>
		2023
	</button>
</div>

<svg viewBox="0 0 975 610">
	<!-- Counties -->
	{#each counties as feature}
	  <path 
		d={path(feature)} 
		on:click={() => selected = feature} 
		on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && (selected = feature)}
		tabindex="0"
		role="button"
		aria-label="Select county"
		class="county"  
		stroke="rgb(0 0 0 / 10%)" 
		fill={countyColors.find(c => c.id === feature.id)?.color} />
	{/each}

	<!-- State borders -->
	<g fill="none" stroke="black">
		{#each states as feature}
			<path 
			d={path(feature)} 
			on:click={() => selected = feature} 
			on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && (selected = feature)}
			tabindex="0"
			role="button"
			aria-label="Select state"
			class="state" />
		{/each}
	</g>
		
	<!-- Highlight selected county -->
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
	.county {
		transition: fill 0.5s ease; 
	}
	
	.county:hover {
		stroke: black;
		stroke-width: 2;
	}

	.selectedName {
		text-align: center;
		margin-top: 8px;
		font-size: 1.5rem;
	}

	.year-buttons {
		text-align: center;
		margin-bottom: 10px;
	}

	.year-buttons button {
		margin: 5px;
		padding: 8px 16px;
		font-size: 1rem;
		cursor: pointer;
		transition: background-color 0.3s ease; /* Transition for background color */
	}

	.year-buttons button.active {
		background-color: darkblue; /* Darker color when active */
		color: white; /* Change text color for contrast */
	}
</style>
