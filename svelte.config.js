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
        adapter: adapter(),  
        paths: {
            base: '', 
        }
    }
};

export default config;
