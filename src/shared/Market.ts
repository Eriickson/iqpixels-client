import { IProduct } from "./Product";

export interface IMarket {
  _id: string;
  products: IProduct[];
  name: string;
  lastname: string;
  direction: string;
}
