Repro for https://github.com/chimurai/http-proxy-middleware/issues/368

```
# starting from root
cd sveltekit
npm install
npm run dev

# starting from root
cd express
npm install
node index.js
```

Visiting http://localhost:8080 will result in following output:

```
% node index.js
[HPM] Proxy created: /  -> http://localhost:5173/about
Express listening on http://localhost:8080
User request for: /
User request for: /about
User request for: /src/lib/images/svelte-logo.svg
User request for: /src/lib/images/github.svg
User request for: /src/lib/images/svelte-logo.svg
User request for: /src/lib/images/github.svg
User request for: /node_modules/@sveltejs/kit/src/runtime/client/entry.js
User request for: /@fs/Users/secondfry/sources/http-proxy-middleware-issue-368-repro/sveltekit/.svelte-kit/generated/client/app.js
User request for: /favicon.png
```

Due to ` http-proxy-middleware`` adding trailing slash to  `target`
and SvelteKit redirecting to URL without that trailing slash.
