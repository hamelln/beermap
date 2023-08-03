import { User } from "./User";
import OfficeHours from "./OfficeHours";
import Beer from "./beer";

export default interface Brewery {
  id: string;
  breweryName: string;
  breweryType: string;
  address1: string;
  address2?: string;
  address3?: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  country: string;
  phone: string;
  websiteType?: string;
  websiteUrl?: string;
  longitude: number;
  latitude: number;
  breweryDescription: string;
  officeHours: OfficeHours;
  signatureBeer: Beer;
  likes?: User[];
  images?: string[];
}
