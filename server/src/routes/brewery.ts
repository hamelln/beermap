import express from "express";
import { Brewery } from "../models/brewery";

const router = express.Router();

router.get("/:id", (req, res) => {
  // if (!brewery) {
  //   res.status(404).json({ message: "Brewery not found" });
  // } else {
  //   res.json(brewery);
  // }
});

export default router;
