import { Request, Response } from "express";
import { getBreweryById } from "../services/breweryService";

const breweryController = (req: Request, res: Response) => {
  const id = req.params.id;
  const brewery = getBreweryById(id);
  if (brewery) {
    res.json(brewery);
  } else {
    res.status(404).json({ error: "Brewery not found" });
  }
};

export default breweryController;
