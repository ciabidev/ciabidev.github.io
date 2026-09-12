import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter(),
		alias: {
			// an alias ending /* will only match
			// the contents of a directory, not the directory itself
			'$components/*': './src/components/*',
			'$static/*': './static/*',
			'$stores/*': './src/stores/*',

		}
	}
};

export default config;
