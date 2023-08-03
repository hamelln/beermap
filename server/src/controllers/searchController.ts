import { Request, Response } from "express";
import BreweryService from "../services/breweryService";

const breweryService = new BreweryService();

const searchConroller = (req: Request, res: Response) => {
  const query = String(req.query.q ?? "");
  const breweries = breweryService.getBreweriesByQuery(query);
  res.json(breweries);
};

export default searchConroller;
