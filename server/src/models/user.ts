import { Brewery } from "./brewery";

export interface User {
  name: string;
  email: string;
  likes: Brewery[];
}
