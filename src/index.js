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

// 1st assignment

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

// 2nd assignment

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Get a random Pokemon ID between 1 and 151 (for the original 151 Pokemon)
  const pokemonId = Math.floor(Math.random() * 649) + 1;

  // Fetch the Pokemon data from the PokeAPI
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const data = await response.json();

  // Get the SVG sprite URL
  const spriteUrl = data.sprites.other['dream_world'].front_default;

  // Check if the SVG sprite is available
  if (!spriteUrl) {
    return new Response('SVG sprite not available for this Pokemon', {
      headers: { 'content-type': 'text/plain' },
    });
  }

  // Fetch the SVG sprite
  const imageResponse = await fetch(spriteUrl);

  // Return the SVG sprite as the response
  return new Response(imageResponse.body, {
    headers: { 'content-type': 'image/svg+xml' },
  });
}

*/

// 3rd assignment

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const botScoreThreshold = 30; // Set your desired threshold

  // Get the bot score from Cloudflare headers
  const botScore = request.headers.get('cf-bot-management-score');

  if (botScore && parseInt(botScore) < botScoreThreshold) {
    // Redirect suspected bot traffic to httpbin.org/get
    const url = 'https://httpbin.org/get';
    return fetch(url);
  } else {
    // Handle other requests normally
    return fetch(request);
  }
}

