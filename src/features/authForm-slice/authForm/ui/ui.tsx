"use client";

import {
  Form,
  ConfigProvider,
  ThemeConfig,
  TabsProps,
  Tabs,
  Button,
  message,
} from "antd";
import styles from "./ui.module.scss";
import ProductLogo from "../../../../../public/assets/Inverse.Education.svg";
import { FormInputs } from "@/entities/authForm-slice/formInputs";
import { useState } from "react";
import { authUser, registerUser } from "../api";
import { useRouter } from "next/navigation";
import { getAccessToken } from "@/shared/lib/auth/auth-token";
import { IFormData } from "@/shared/interface/auth";
import Image from "next/image";

export const AuthForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    phone: "",
    password: "",
  });
  const [isButtonDisable, setButtonDisable] = useState(true);
  const [isButtonLoading, setButtonLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Вход",
      children: (
        <FormInputs
          formData={formData}
          setFormData={setFormData}
          setSubmitted={setButtonDisable}
          label="Auth"
          placeholder="Введите почту"
        />
      ),
    },
    {
      key: "2",
      label: "Регистрация",
      children: (
        <FormInputs
          formData={formData}
          setFormData={setFormData}
          setSubmitted={setButtonDisable}
          label="Register"
          placeholder="Введите телефон"
        />
      ),
    },
  ];

  const loadingFinish = () => {
    setTimeout(() => {
      setButtonLoading(false);
    }, 10000);
  };

  const onButtonSubmit = async () => {
    if (formData.name?.length === 0) {
      try {
        setButtonLoading(true);
        const response = await authUser(formData);
        if (!!getAccessToken() && response instanceof Error) {
          router.push("/course/my");
        }
        if (response instanceof Error) {
          messageApi.open({
            type: "error",
            content: "Этот аккаунт уже существует",
          });
          setButtonLoading(false);
          return;
        } else if (!!getAccessToken()) {
          router.push("/course/my");
        }
        loadingFinish();
        return;
      } catch (error) {
        messageApi.open({
          type: "error",
          content: "Этот аккаунт уже существует",
        });
        setButtonLoading(false);
      }
    } else {
      try {
        setButtonLoading(true);
        const response = await registerUser(formData);
        if (!!getAccessToken() && response instanceof Error) {
          router.push("/course/my");
        }
        if (response instanceof Error) {
          messageApi.open({
            type: "error",
            content: "Неверный логин или пароль",
          });
          setButtonLoading(false);
          return;
        } else if (!!getAccessToken()) {
          router.push("/course/my");
        }
        loadingFinish();
        return;
      } catch (error) {
        messageApi.open({
          type: "error",
          content: "Неверный логин или пароль",
        });
        setButtonLoading(false);
      }
    }
  };
  return (
    <>
      {contextHolder}
      <ConfigProvider theme={authFormTheme}>
        <section className={styles.layout}>
          <Form
            autoComplete="on"
            name="validateOnly"
            layout="vertical"
            className={styles.form}
            form={form}
          >
            <Image
              src={ProductLogo}
              width={196}
              height={17}
              alt="Inverse Education"
            />
            <div className={styles.inputLayout}>
              <Tabs
                style={{ width: "100%" }}
                defaultActiveKey="1"
                items={items}
              />

              <Form.Item style={{ marginTop: "16px", width: "100%" }}>
                <Button
                  onClick={onButtonSubmit}
                  loading={isButtonLoading}
                  disabled={isButtonDisable}
                  size="large"
                  style={{ width: "100%" }}
                  type="primary"
                  htmlType="submit"
                >
                  Войти
                </Button>
              </Form.Item>
            </div>
          </Form>
        </section>
      </ConfigProvider>
    </>
  );
};

const authFormTheme: ThemeConfig = {
  components: {
    Tabs: {
      colorPrimary: "#00D7B7",
      itemColor: "#757575",
      itemHoverColor: "#00D7B7",
      itemSelectedColor: "#222",
      itemActiveColor: "#00D7B7",
    },
    Button: {
      colorPrimary: "#00D7B7",
      colorBgContainerDisabled: "#CCFFF7",
      colorTextDisabled: "#fff",
      colorPrimaryHover: "#00D7B7",
      colorPrimaryActive: "#00D7B7",
      colorBorder: undefined,
    },
  },
};
