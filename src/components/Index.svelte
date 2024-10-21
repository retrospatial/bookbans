<script>
	import { getContext } from "svelte";
	import Title from "$components/bookbans/Title.svelte";
	import Page from "$components/bookbans/Page.svelte";
	import copy from "$data/copy.json";
	// import Footer from "$components/Footer.svelte";

	// const copy = getContext("copy");
	// const data = getContext("data");
</script>

<Title />
<Page />




<!-- <Footer /> -->

<style>
	/* Set the background image for the component */
	:global(body) {
		background-image: url('/assets/images/paper.png');
		background-size: cover; /* Cover the entire background */
		background-repeat: no-repeat; /* Prevent the image from repeating */
		background-position: center; /* Center the image */
	}
	
	/* Optional: Set a min height to ensure the background is visible */
	main {
		min-height: 100vh; /* Adjust as needed */
	}
</style>