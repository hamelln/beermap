import IBeer from "./Beer";
import { IUser } from "./User";

export default interface IBrewery {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string;
  address_2?: string;
  address_3?: string;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  phone: string;
  website_type?: string;
  website_url?: string;
  longitude: number;
  latitude: number;
  brewery_description?: string;
  signature_beer?: IBeer;
  likes?: IUser[];
  images?: [];
}
