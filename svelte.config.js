import adapterStatic from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import { sveltekit } from '@sveltejs/kit/vite';

const preprocess = sveltePreprocess({
	postcss: {
		plugins: [autoprefixer]
	}
});

const config = {
	preprocess,
	kit: {
		adapter: adapterStatic({
			// Use the path to your repository name, or '/' for root
			pages: 'build',
			assets: 'build',
			fallback: null,
			strict: false
		}),
		paths: {
			base: '/bookbans' // Update this to match your repo name
		}
	},
	vitePlugin: {
		// experimental: {
		// 	inspector: { holdMode: true },
		// }
	}
};

export default config;
