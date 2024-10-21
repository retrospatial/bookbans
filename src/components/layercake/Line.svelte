<script>
	import { getContext } from "svelte";
	import { line, curveLinear } from "d3";

	const { data, xGet, yGet } = getContext("LayerCake");

	export let stroke = "#ccc";
	export let curve = curveLinear;
	export let inViewTrigger = false;

	// d3 line generator
	$: path = line().x($xGet).y($yGet).curve(curve);
	$: pathD = path($data);

	// get last point in the data array to place the circle
	$: lastPoint = $data.length > 0 ? { x: $xGet($data[$data.length - 1]), y: $yGet($data[$data.length - 1]) }: {x: 0, y: 0};
</script>

// line path
<path d={pathD} {stroke} class:animate={inViewTrigger}/>

// circle path
<!-- <circle 
    cx={lastPoint.x} 
    cy={lastPoint.y} 
    r="3" 
    fill={stroke} 
    class:showCircle={inViewTrigger} 
/> -->

<style>
	path {
		fill: none;
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: 2;
		stroke-dasharray: 1000;
		stroke-dashoffset: 1000;
		transition: stroke-dashoffset 5s;
	}

	.animate {
			stroke-dashoffset: 0;
	}

	circle {
		transition: opacity ease-in-out;
		transition-delay: 2.8s;
		opacity: 0;
	}

	.showCircle {
		opacity: 1;
	}
</style>
