<script>
    import { onMount } from "svelte";
    import * as d3 from "d3";
    import { LayerCake, Svg, Html } from 'layercake';
    import Line from "$components/layercake/Line.svelte";
    import AxisX from "$components/layercake/AxisX.svg.svelte";
    import AxisY from "$components/layercake/AxisY.svg.svelte";
    import ChartDetails from "$components/bookbans/ChartDetails.svelte";
    import inView from "$actions/inView.js";

    // Defaults
    let data = [];
    const xKey = "creation_date"; 
    const yKey = "cumulative_count";  
    let inViewTrigger = false;
    let innerWidth = 0;

    // Generate ticks every 8 months
    $: ticks = d3.timeMonths(new Date(2021, 0, 1), new Date(2024, 9, 31), 7); 

    // Load the data when the component is mounted
    onMount(async () => {
        const dataPath = "/assets/data/2_risegroups.csv"; 
        data = await d3.csv(dataPath);

        // Create a date parser for the 'YYYY-MM-DD' format
        const parseDate = d3.timeParse("%Y-%m-%d");
        
        // Ensure the y values are numbers
        data.forEach(d => {
            d[xKey] = parseDate(d[xKey]);
            d[yKey] = +d[yKey];

            // console.log(`Parsed date: ${d[xKey]}, Cumulative count: ${d[yKey]}`);

            // if (isNaN(d[yKey])) {
            //     console.error("Cumulative count is NaN for:", d);
            // }
        });

        // Check for valid data
        // if (data.length === 0 || data.some(d => !d[xKey] || isNaN(d[yKey]))) {
        //     console.error("No valid data to render the line.");
        // }
    });
    

    // Function to trigger drawing when in view
    function inViewDraw() { inViewTrigger = true; }
    function exitViewDraw() { inViewTrigger = false; }

    // Define the formatTick function
    const formatTick = d3.timeFormat("%b %Y"); // Format for the ticks

</script>

<svelte:window bind:innerWidth />

<!-- Chart Title -->
<ChartDetails title="Moms for Liberty Facebook Groups" />

<div class="chart-container"
    use:inView
    on:enter={inViewDraw}
    on:exit={exitViewDraw}
>
    <LayerCake
        padding={{ top: 16, right: 16, bottom: 32, left: 16 }}
        x={xKey}
        y={yKey}
        xDomain={d3.extent(data, d => d[xKey])}
        yDomain={[0, d3.max(data, d => d[yKey])]}
        data={data}
    >
        <Svg>
            <AxisX 
                gridlines={false} 
                ticks={ticks} 
                formatTick={formatTick}
            />
            <AxisY snapBaselineLabel gridlines={true} />
            <Line inViewTrigger={inViewTrigger} stroke="black" stroke-width="2" />
        </Svg>
    </LayerCake>
</div>

<!-- Chart Source -->
<ChartDetails source="Source: Facebook" />

<style>
    .chart-container {
        width: calc(100% - 2rem);
        height: 400px;
        margin: 1rem auto 1rem auto;
        background: #f2f2f2;
        padding: 1rem;
        border: 2px solid;
        border-color: var(--window-inset-stroke);
    }

    @media (max-width: 600px) { 
        .chart-container {
            padding: 1rem;
            height: 300px;
        }
    }
</style>
