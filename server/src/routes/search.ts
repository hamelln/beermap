import express from "express";
import getBreweriesByQuery from "../services/search.service";

const router = express.Router();

router.get("/", (req, res) => {
  const query = req.query.q as string;
  const results = getBreweriesByQuery(query);
  res.json(results);
});

export default router;
