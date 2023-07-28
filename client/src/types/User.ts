import Brewery from "./Brewery";

export interface User {
  name: string;
  email: string;
  likes: Brewery[];
}
