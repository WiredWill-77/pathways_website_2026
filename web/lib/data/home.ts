import { HOME_CONTENT, PRODUCTS } from "@/data/mockData";
import { mockQuery } from "./mock-client";
import type { Product } from "@/types/blocks";
import type { HomeContent } from "@/types/home";

export async function getHomeContent(): Promise<HomeContent> {
  return mockQuery(() => HOME_CONTENT);
}

export async function getProducts(): Promise<Product[]> {
  return mockQuery(() => PRODUCTS);
}
