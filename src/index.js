/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 

export default {
	async fetch(request, env, ctx) {
		return new Response('Hello World!');
	},
};
*/

// src/index.js
var src_default = {
	async fetch(request, env, ctx) {
		if(request.method == "POST") {
			return new Response('POST method was used', {
				headers: {
					'content-type': 'application/json',
				},
			});
		}
		else{
			return new Response('POST method expected', {
				headers: {
					'content-type': 'application/json',
				},
			});
		}
	}
};
export {
	src_default as default
};
//# sourceMappingURL=index.js.map
