import { Router } from "express";
import {
  postURLShortener,
  getShortenerPage,
  redirectToShortLink,
} from "../controllers/postshortener.controller.js";

const router = Router();

// router.get("/report", (req, res) => {
//   const student = [
//     {
//       name: "Sankar",
//       grade: "10th",
//       favoriteSubject: "Mathematics",
//     },
//     {
//       name: "Priya",
//       grade: "9th",
//       favoriteSubject: "Biology",
//     },
//     {
//       name: "Arjun",
//       grade: "11th",
//       favoriteSubject: "Physics",
//     },
//     {
//       name: "Meera",
//       grade: "12th",
//       favoriteSubject: "Chemistry",
//     },
//     {
//       name: "Rahul",
//       grade: "8th",
//       favoriteSubject: "Computer Science",
//     },
//   ];

//   res.render("report", { student });
// });

router.get("/", getShortenerPage);

router.post("/", postURLShortener);

router.get("/:shortCode", redirectToShortLink);

// export default router;

// Named Export

export const shortenerRoutes = router;
