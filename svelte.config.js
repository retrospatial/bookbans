import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

const preprocess = sveltePreprocess({
    postcss: {
        plugins: [autoprefixer]
    }
});

const isGitHubPages = process.env.GITHUB_ACTIONS || false;

const config = {
    preprocess,
    kit: {
        adapter: adapter(),
        paths: {
            base: isGitHubPages ? '/bookbans' : '' // GitHub Pages expects the base path, Vercel doesn't.
        }
    }
};

export default config;
