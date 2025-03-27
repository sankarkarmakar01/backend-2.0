import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();
const staticPath = path.join(import.meta.dirname,"public");
app.use("/public",express.static(staticPath));
// app.use(express.static(staticPath));

app.get("/", (req, res) => {
  // console.log(__dirname);
  // console.log(__filename)
  // console.log(import.meta.url)
  // const __filename = new URL(import.meta.url).pathname
  // console.log(__filename)

  const homePagePath = path.join(import.meta.dirname, "public", "index.html");

  res.sendFile(homePagePath);
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
