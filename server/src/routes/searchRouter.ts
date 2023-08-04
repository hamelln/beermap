import express from "express";
import searchConroller from "../controllers/searchController";
import breweryController from "../controllers/breweryController";

const searchRouter = express.Router();

searchRouter.get("/:id", breweryController);
searchRouter.post("/", searchConroller);

export default searchRouter;
