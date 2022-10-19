import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "./../store";

export interface IProductType {
  id: number;
  discount: string;
  price: number;
  discountedprice: number;
  img: string;
  name: string;
}
export interface ICartType {
  product: IProductType;
  quantity: number;
}
export interface ICartReduxState {
  cart: ICartType[];
}
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};
