import { instance } from "@/shared/api";
import { IFormData, IToken } from "@/shared/interface/auth";

export const authUser = async (
  authProps: IFormData
): Promise<IToken | Error> => {
  try {
    const { data }: { data: IToken } = await instance.post("/auth/sign-in", {
      phone: `+${authProps.phone}`,
      password: authProps.password,
    });
    sessionStorage.setItem("accessToken", data.token);
    return data;
  } catch (error) {
    return error as Error;
  }
};

export const registerUser = async (
  authProps: IFormData
): Promise<IToken | Error> => {
  try {
    const { data }: { data: IToken } = await instance.post("/auth/register", {
      phone: `+${authProps.phone}`,
      firstname: authProps.name,
      surname: "",
      lastname: "",
      password: authProps.password,
      admin: true,
    });

    return data;
  } catch (error) {
    return error as Error;
  }
};
