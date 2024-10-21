<script>
    import { onMount } from "svelte";
    import * as d3 from "d3";
    import { LayerCake, Svg } from 'layercake';
    import Line from "$components/layercake/Line.svelte";
    import AxisX from "$components/layercake/AxisX.svg.svelte";
    import AxisY from "$components/layercake/AxisY.svg.svelte";
    import ChartDetails from "$components/bookbans/ChartDetails.svelte";
    import inView from "$actions/inView.js";

    // Defaults
    let data = [];
    const xKey = "year"; 
    const yKey = "bans";  
    let inViewTrigger = false;
    $: innerWidth = 0;
    $: ticks = [2000, 2005, 2010, 2015, 2020];

    // Load the data when the component is mounted
    onMount(async () => {
        const dataPath = "/assets/data/1_uniquetitles.csv"; 
        data = await d3.csv(dataPath);
        
        // Ensure the y values are numbers
        data.forEach(d => {
            d[xKey] = +d[xKey];
            d[yKey] = +d[yKey];
        });

        console.log(data);
    });

    // Function to trigger drawing when in view
    function inViewDraw() { inViewTrigger = true; }
    function exitViewDraw() { inViewTrigger = false; }
</script>

<svelte:window bind:innerWidth />

<!-- Chart Title -->
<ChartDetails title="Unique Book Titles Challenged in the U.S." />

<div class="chart-container"
    use:inView
    on:enter={inViewDraw}
    on:exit={exitViewDraw}
>
    <LayerCake
        padding={{ top: 16, right: 16, bottom: 32, left: 16 }}
        x={xKey}
        y={yKey}
        yDomain={[0, null]}
        data={data}
    >
        <Svg>
            <AxisX gridlines={false} {ticks}/>
            <AxisY snapBaselineLabel gridlines={true} />
            <Line inViewTrigger={inViewTrigger} stroke="black"/>
        </Svg>
    </LayerCake>
</div>

<!-- Chart Source -->
<ChartDetails source="Source: American Library Association's Office for Intellectual Freedom" />

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
