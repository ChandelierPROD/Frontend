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
  grade: number;
  underThemeIds: number[];
  under: IUnderTheme[];
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

export interface IUnderTheme {
  title: string;
  description: string;
  videoUrl: string;
  explored: boolean; // Пройдено
  started: boolean;
  image: string;
  grade: number;
  points: number;
  tasks: ITask[];
}

export interface ITask {
  description: string;
  response: string;
  explored: boolean;
  started: boolean;
  image: string;
}
