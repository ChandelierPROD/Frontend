import { instanceLogged } from "@/shared/api";
import { ICourse } from "@/shared/interface/course";

export const GetCourses = async (): Promise<ICourse[] | Error> => {
  try {
    const { data }: { data: ICourse[] } = await instanceLogged.get(
      "/author/themes"
    );
    return data;
  } catch (error) {
    return error as Error;
  }
};
