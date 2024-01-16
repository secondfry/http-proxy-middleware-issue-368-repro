const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = new express();
const middleware = createProxyMiddleware({
  target: `http://localhost:5173/about`,
});
app.use((req, res, next) => {
  console.log(`User request for: ${req.url}`);
  next();
});
app.use(middleware);

app.listen(8080, () =>
  console.log("Express listening on http://localhost:8080")
);
