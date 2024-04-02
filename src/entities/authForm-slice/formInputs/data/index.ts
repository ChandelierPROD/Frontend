import { IFormData } from "@/shared/interface/auth";

export const RequestFieldsForAuth: (keyof IFormData)[] = ["phone", "password"];
export const RequestFieldsForRegister: (keyof IFormData)[] = [
  "phone",
  "password",
  "name",
];
