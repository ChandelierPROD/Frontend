export interface IUser {
  id: number;
  firstname: "string"; // Имя
  surname: "string"; // Отчество
  lastname: "string"; // Фамилия
  phone: string;
  role: IRole;
  themeId: number[];
  completedThemeIds: number[];
  avatar: string;
  points: number;
  achievements: IAchievement;
}

export interface IRole {
  id: number;
  name: string;
}



export interface IAchievement {
  id: number;
  name: string;
  description: string;
  cover: string;
  isCompleted: boolean;
}
