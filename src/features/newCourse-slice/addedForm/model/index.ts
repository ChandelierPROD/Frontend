import { ICategory } from "@/shared/interface/course";

export const isNonEmptyArray = (value: any): value is any[] => {
  return Array.isArray(value) && value.length > 0;
};

export const findCategoryById = (array: ICategory[], id: number) => {
  return array?.filter((obj: ICategory) => obj.id === id);
};
