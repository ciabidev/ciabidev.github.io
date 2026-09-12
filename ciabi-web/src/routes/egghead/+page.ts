import { redirect } from '@sveltejs/kit';

export const prerender = true;

export function load() {
	redirect(308, 'https://discord.com/invite/C6XGxP4gjs');
}
