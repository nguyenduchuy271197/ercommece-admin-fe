import { Product } from "@/lib/schema/product";
import { products } from "@/data.json";

export async function getProducts(): Promise<Product[]> {
  return products;
}
