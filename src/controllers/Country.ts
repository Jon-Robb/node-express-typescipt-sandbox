import { Request, Response } from "express";
import getCountry from "../services/Country";

const getCountryInfo = async (req: Request, res: Response) => {
    try {
        const countryName = req.params.name;
        const countryInfo = await getCountry(countryName);
        res.status(200).send(countryInfo);
    } catch (error) {
        res.status(404).send(error);
    }
}

export default getCountryInfo;

