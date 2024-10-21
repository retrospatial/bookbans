import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

const preprocess = sveltePreprocess({
    postcss: {
        plugins: [autoprefixer]
    }
});

const config = {
    preprocess,
    kit: {
        adapter: adapter({
            // No specific options are required for Vercel adapter
        }),
        paths: {
            base: '', // You can leave this empty or set it if your app is in a subdirectory
        }
    }
};

export default config;
