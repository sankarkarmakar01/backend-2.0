import express from "express";
import { shortenerRoutes } from "./routes/shortener.routes.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//express router
// app.use(router)

app.set("view engine", "ejs");
// app.set("views", "./views");

app.use(shortenerRoutes);


app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
