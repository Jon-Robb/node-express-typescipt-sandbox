import Express, { Request, Response } from "express";
import getCountryInfo from "../controllers/Country";

const countryRouter = Express.Router();

countryRouter.get('/country/:name', getCountryInfo);

export default countryRouter;