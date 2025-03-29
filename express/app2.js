import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

const staticPath = path.join(import.meta.dirname, "public");

app.use(express.static(staticPath));

app.use(express.urlencoded({ extended: true }));
// app.get("/contact", (req, res) => {
//   console.log(req.query);
//   res.redirect("/");
// });

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use((req,res)=>{
    return res.status(404).send("Page not found...")
})

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});

// app.use((req,res)=>{
//     res.status(404).send("Page not found")
// })