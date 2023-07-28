import React, { useEffect, useState } from "react";
import axios from "axios";
import Brewery from "src/types/Brewery";

interface Props {
  inputValue: string;
}

const Breweries = ({ inputValue }: Props) => {
  const [breweriesList, setBreweriesList] = useState<Brewery[]>([]);

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3008/search?q=${inputValue}`
        );
        setBreweriesList(response.data);
      } catch (error) {
        console.error("Error fetching data from server:", error);
      }
    };

    if (inputValue) {
      fetchBreweries();
    } else {
      setBreweriesList([]);
    }
  }, [inputValue]);

  return (
    <div>
      {breweriesList.map((brewery: Brewery) => (
        <div key={brewery.id}>{brewery.name}</div>
      ))}
    </div>
  );
};

export default Breweries;
