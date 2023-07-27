import { getAllBreweries } from "../dao/breweryDao";
import { Brewery } from "../models/brewery";

const getBreweriesByQuery = (query: string): Brewery[] => {
  const breweries = getAllBreweries();
  const results = breweries.filter(
    (b) =>
      b.name.includes(query) ||
      b.city.includes(query) ||
      b.state_province.includes(query)
  );
  return results;
};

export default getBreweriesByQuery;
