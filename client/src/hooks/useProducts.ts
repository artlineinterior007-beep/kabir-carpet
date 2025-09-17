import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/product";

async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("/data/products.json");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}
