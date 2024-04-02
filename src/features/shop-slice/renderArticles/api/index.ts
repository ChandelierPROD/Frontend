import { instanceLogged } from "@/shared/api";
import { IProduct } from "@/shared/interface/shop";

export const GetProducts = async (): Promise<IProduct[] | Error> => {
  try {
    const { data }: { data: IProduct[] } = await instanceLogged.get(
      "/product/"
    );
    return data;
  } catch (error) {
    return error as Error;
  }
};
