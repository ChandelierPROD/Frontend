import { ICourseCreateForm } from "@/shared/interface/course";

export const RequestFields: (keyof ICourseCreateForm)[] = [
  "category",
  "description",
  "points",
  "title",
];
