import StartFirebase from "../../firebase";
import Brewery from "../models/brewery";
import Presenter from "./presenter";

interface BreweryJson {
  [K: string]: Brewery[];
}

export default class BreweryService {
  private allBreweries: BreweryJson = {};
  private breweryList: Brewery[] = [];
  private breweryObject: { [K: string]: Brewery } = {};

  async loadAllBreweries(): Promise<void> {
    const database = StartFirebase();
    const presenter = new Presenter(database);
    this.allBreweries = await presenter.fetchAllBreweries();
    this.#createBreweryList(this.allBreweries);
    this.#createBreweryObject(this.breweryList);
  }

  #createBreweryList(breweriesInCities: BreweryJson): void {
    for (const key in breweriesInCities) {
      const l = breweriesInCities[key];
      this.breweryList.push(...l);
    }
  }

  #createBreweryObject(breweryList: Brewery[]): void {
    breweryList.map((brewery: Brewery) => {
      this.breweryObject[brewery.id] = brewery;
    });
  }

  getBreweryById(id: string): Brewery {
    return this.breweryObject[id];
  }

  getBreweriesByQuery(query: string): Brewery[] {
    return this.breweryList.filter(
      ({ breweryName, city, stateProvince }: Brewery) =>
        breweryName.includes(query) ||
        stateProvince.includes(query) ||
        city.includes(query)
    );
  }
}

// export async function updateBreweriesData(): Promise<void> {
//   const lastUpdateTimestamp = getLastUpdateTimestamp(); // 마지막 업데이트 시간 구하기, 이 함수는 별도로 구현해야 함.

//   const updatedBreweries: Brewery[] = await getUpdatedBreweries(
//     lastUpdateTimestamp
//   );

//   // 변경된 데이터를 메모리에 있는 데이터와 합치기
//   for (const updatedBrewery of updatedBreweries) {
//     const index = allBreweries.findIndex(
//       (brewery) => brewery.id === updatedBrewery.id
//     );

//     if (index >= 0) {
//       allBreweries[index] = updatedBrewery; // 기존 브루어리 정보 업데이트
//     } else {
//       allBreweries.push(updatedBrewery); // 새로운 브루어리 정보 추가
//     }
//   }

//   // 마지막 업데이트 시간 갱신
//   setLastUpdateTimestamp();
// }

// const getLastUpdateTimestamp = () => {};
// const setLastUpdateTimestamp = () => {};
// const getUpdatedBreweries = (lastUpdateTimestamp) => [];
