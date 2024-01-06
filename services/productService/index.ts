import { IProduct } from "@/models/Product.model";
import { BASE_URL } from "../globals"

export const getAllProducts = async (): Promise<IProduct[]> => {
  const res = await fetch(`${BASE_URL}/Products`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<IProduct[]>;
}