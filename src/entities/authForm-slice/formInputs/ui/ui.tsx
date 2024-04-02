"use client";

import { ConfigProvider, Form, Input, ThemeConfig } from "antd";
import styles from "./ui.module.scss";

import { isNonEmptyArray } from "../model";
import { useEffect } from "react";

import { IFormData } from "@/shared/interface/auth";
import { RequestFieldsForAuth, RequestFieldsForRegister } from "../data";

export const FormInputs = ({
  label,
  placeholder,
  setSubmitted,
  formData,
  setFormData,
}: {
  label: "Auth" | "Register";
  placeholder: string;
  setSubmitted: (arg: boolean) => void;
  formData: IFormData;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const isFormValid = (values: Partial<IFormData>): boolean => {
      let answer: boolean = false;
      label === "Auth"
        ? (answer = RequestFieldsForAuth.every((fieldName) => {
            const fieldValue = values[fieldName];
            return (
              fieldValue !== undefined &&
              fieldValue !== null &&
              fieldValue !== "" &&
              (Array.isArray(fieldValue) ? isNonEmptyArray(fieldValue) : true)
            );
          }))
        : (answer = RequestFieldsForRegister.every((fieldName) => {
            const fieldValue = values[fieldName];
            return (
              fieldValue !== undefined &&
              fieldValue !== null &&
              fieldValue !== "" &&
              (Array.isArray(fieldValue) ? isNonEmptyArray(fieldValue) : true)
            );
          }));

      return answer;
    };
    // Проверяем готовность формы при изменении данных
    if (!isFormValid(formData)) {
      setSubmitted(true);
    } else setSubmitted(false);
  }, [formData, label, setSubmitted]);
  return (
    <>
      <ConfigProvider theme={inputTheme}>
        <div className={styles.layout}>
          {label == "Register" && (
            <Form.Item
              style={{
                width: "100%",
                textAlign: "start",
                alignItems: "flex-start",
              }}
              label="Имя"
            >
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                size="large"
                placeholder="Введите имя"
              />
            </Form.Item>
          )}
          <Form.Item
            style={{
              width: "100%",
              textAlign: "start",
              alignItems: "flex-start",
            }}
            label="Номер телефона"
          >
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              size="large"
              type="number"
              placeholder={placeholder}
            />
          </Form.Item>
          <Form.Item
            style={{
              width: "100%",
              textAlign: "start",
              alignItems: "flex-start",
            }}
            label="Пароль"
          >
            <Input
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              type="password"
              size="large"
              placeholder="Введите пароль"
            />
          </Form.Item>
        </div>
      </ConfigProvider>
    </>
  );
};
const inputTheme: ThemeConfig = {
  components: {
    Input: {
      colorPrimaryHover: "#00D7B7",
      colorPrimary: "#00D7B7",
    },
  },
};
