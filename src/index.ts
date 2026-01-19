const baseURL = 'https://prinsss.github.io';

async function handleRequest(request: Request) {
	const url = new URL(request.url);
	return fetch(`${baseURL}${url.pathname}${url.search}`, request);
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return handleRequest(request);
	},
} satisfies ExportedHandler<Env>;
