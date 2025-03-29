import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();
const staticPath = path.join(import.meta.dirname, "public");
app.use("/public", express.static(staticPath));

/*
//* app.use(express.static(staticPath));
*app.get("/", (req, res) => {
  //* console.log(__dirname);
  //* console.log(__filename)
  //* console.log(import.meta.url)
  //* const __filename = new URL(import.meta.url).pathname
  //* console.log(__filename)

  *const homePagePath = path.join(import.meta.dirname, "public");

  *res.sendFile(homePagePath);
*});
*/

app.get("/product", (req, res) => {
  console.log(req.query);
  res.send(`<h1>Product Page </h1>`);
});

app.get("/profile/:username", (req, res) => {
  console.log(req.params);
  res.send(`<h1>My username is ${req.params.username}</h1>`);
});

app.get("/profile/:username/article/:slug", (req, res) => {
  console.log(req.params);
  const formatedSlug = req.params.slug.replace(/-/g, " ");
  res.send(`<h1>Article ${req.params.username} by ${formatedSlug}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
