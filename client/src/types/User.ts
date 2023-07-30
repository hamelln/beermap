import IBrewery from "./Brewery";

export interface IUser {
  name: string;
  email: string;
  likes: IBrewery[];
}
