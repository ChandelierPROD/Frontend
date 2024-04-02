import { IUser } from "./user";

export interface ICourse {
  id: number;
  title: string;
  category: ICategory;
  description: string;
  explored: boolean;
  author: string;
  points: number;
  students: number;
  graduates: number;
  underThemeIds: number[];
}

export interface ICategory {
  id: number;
  category: string;
  isSelect?: boolean;
}

export interface ICourseCreateForm {
  title: string;
  category: string;
  description: string;
  authorInfo: string;
  author?: IUser;
  points?: number;
}
