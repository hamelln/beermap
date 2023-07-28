import express from "express";
import searchConroller from "../controllers/searchController";
import breweryController from "../controllers/breweryController";

const searchRouter = express.Router();

searchRouter.get("/", searchConroller);
searchRouter.get("/:id", breweryController);

export default searchRouter;
