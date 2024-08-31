import { NextResponse } from "next/server";
import { AxiosInstance } from "./instance";
import { ApiRoutes } from "./routes";
import { Category, Product } from "@prisma/client";

interface RetrunProps extends Category {
  products: Product[];
}

export async function getAllCategories(): Promise<RetrunProps[]> {
  try {
    const { data } = await AxiosInstance.get(ApiRoutes.GET_CATEGORIES);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
