import { Request, Response } from "express";
import { getBreweriesByQuery } from "../services/breweryService";

const searchConroller = (req: Request, res: Response) => {
  const query = String(req.query.q ?? "");
  const breweries = getBreweriesByQuery(query);
  res.json(breweries);
};

export default searchConroller;
