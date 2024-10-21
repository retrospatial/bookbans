<script>
	import { getContext } from "svelte";
	import MicroCMS from "$components/helpers/MicroCMS.svelte";
	import Test from "$components/demo/Demo.MicroCMS.Test.svelte";
	import googleDoc from "$data/google-doc.txt?raw";

	const copy = getContext("copy");
	const components = { Test };
	const body = copy.body;
</script>

<section id="demo-microcms">
	<h2>Unique Titles Banned in the US</h2>
	<MicroCMS {body} {components}></MicroCMS>
</section>

<style>
	pre {
		background: var(--color-fg);
		color: var(--color-bg);
		padding: 16px;
	}
</style>

<!-- <code>
	<pre>{googleDoc}</pre>
</code> -->