import Beer from "./Beer";
import { User } from "./User";

export default interface Brewery {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string;
  address_2?: string;
  address_3?: string;
  city: string;
  state_province: string;
  postal_code: number;
  country: string;
  phone: string;
  website_url?: string;
  longitude: string;
  latitude: string;
  brewery_description?: string;
  signature_beer?: Beer;
  likes?: User[];
  images?: [];
}
