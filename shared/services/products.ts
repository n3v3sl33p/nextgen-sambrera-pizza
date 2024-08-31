import { Product } from "@prisma/client";
import { AxiosInstance } from "./instance";
import { ApiRoutes } from "./routes";
export const search = async (query: string): Promise<Product[]> => {
  const { data } = await AxiosInstance.get<Product[]>(
    ApiRoutes.SEARCH_PRODUCTS,
    {
      params: { query },
    }
  );
  return data;
};
