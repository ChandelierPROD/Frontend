import { instanceLogged } from "@/shared/api";
import { ICategory, ICourse, ICourseCreateForm } from "@/shared/interface/course";

export const getCourseCategories = async (): Promise<ICategory[] | Error> => {
  try {
    const { data }: { data: ICategory[] } = await instanceLogged.get(
      `/category`
    );
    return data;
  } catch (error) {
    return error as Error;
  }
};

export const createCourse = async (
  props: ICourseCreateForm
): Promise<ICourse | Error> => {
  try {
    const { data }: { data: ICourse } = await instanceLogged.post(
      "/themes/new"
    );
    return data;
  } catch (error) {
    return error as Error;
  }
};
