import  CountryInfo  from "../models/CountryDTO";

const coutriesAPInamesuffix = 'https://restcountries.com/v3.1/name/';


const getCountry = async (countryName: string) => {
    try {
        const response = await fetch(`${coutriesAPInamesuffix}${countryName}`);
        const countryData = await response.json();
        const data: CountryInfo = {
            officialName: countryData[0].name.official,
            capital: countryData[0].capital[0],
            region: countryData[0].region,
            subregion: countryData[0].subregion,
            languages: Object.values(countryData[0].languages),
            population: countryData[0].population,
            flag: countryData[0].flags.png,
        };
        return data;
    } catch (error) {
        throw `error while fetching country ${countryName} --- errror: ${error}`;
    }
}

export default getCountry;