import { instanceLogged } from "@/shared/api";
import { IUser } from "@/shared/interface/user";

export const GetAuthUserData = async (): Promise<IUser | Error> => {
  try {
    const { data }: { data: IUser } = await instanceLogged.get("/me/profile");
    return data;
  } catch (error) {
    return error as Error;
  }
};
