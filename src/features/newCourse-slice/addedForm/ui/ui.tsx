"use client";

import { Button, ConfigProvider, Form, Input } from "antd";
import { addedFormTheme } from "../theme";
import { useEffect, useState } from "react";
import { ICategory, ICourseCreateForm } from "@/shared/interface/course";
import { getCourseCategories } from "../api";
import { CategoryItem } from "@/entities/newCourse-slice/categoryItem";
import styles from "./ui.module.scss";
import { RequestFields } from "../data";
import { findCategoryById, isNonEmptyArray } from "../model";
import { SubtopicArticle } from "@/entities/subtopic-slice/article";

export const AddedForm = () => {
  const [categories, setCategories] = useState<ICategory[]>();
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [formData] = Form.useForm();
  const [inputValues, setInputValues] = useState<ICourseCreateForm>({
    title: "",
    category: "",
    description: "",
    authorInfo: "",
  });
  // Проверка, является ли форма заполненной
  const isFormValid = (values: Partial<ICourseCreateForm>): boolean => {
    return RequestFields.every((fieldName) => {
      const fieldValue = values[fieldName];
      return (
        fieldValue !== undefined &&
        fieldValue !== null &&
        fieldValue !== "" &&
        (Array.isArray(fieldValue) ? isNonEmptyArray(fieldValue) : true)
      );
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchCategories: ICategory[] | Error = await getCourseCategories();
      if (fetchCategories instanceof Error) return;
      else {
        setCategories(fetchCategories);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    // Проверяем готовность формы при изменении данных
    if (isFormValid(inputValues)) {
      formData
        .validateFields()
        .then(() => {
          // Все поля валидны
        })
        .catch(() => {
          // Есть невалидные поля
        });
    }
  }, [formData, inputValues]);

  const handleSelect = (id: number) => {
    const updatedRectangles = categories?.map((category) => ({
      ...category,
      isSelect: category.id === id,
    }));
    setCategories(updatedRectangles);
    const selectedRectangle = updatedRectangles?.find(
      (rectangle) => rectangle?.isSelect
    );

    setInputValues({
      ...inputValues,
      category: selectedRectangle?.category ? selectedRectangle?.category : "",
    });
  };
  // Функция для изменения инпутов в форме
  const handleInputChange = (name: string, value: string | number | null) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  //   const handleCreateSection = async () => {
  //     const requestData = {
  //         name: name,
  //         description: description,
  //         category: categories && selectedCategory(categories),
  //         address: address,
  //         groups: createdGroups && replaceDayOfWeekWithNumber(createdGroups),
  //     };
  //     try {
  //         await instanceLogged.post('/sections/create/', requestData);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // };
  // const handleCreateCourse = () =>{
  //   const req: ICourseCreateForm = {
  // title:
  //   }
  // }
  return (
    <>
      <ConfigProvider theme={addedFormTheme}>
        <Form form={formData} style={{ width: "100%" }} layout="vertical">
          <Form.Item style={{ width: "50%" }} required label="Название курса">
            <Input
              width={360}
              size="large"
              name="title"
              value={inputValues.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              placeholder="Введите название"
            />
          </Form.Item>
          <Form.Item
            style={{ width: "50%" }}
            required
            label="Краткая информация о курсе"
          >
            <Input
              width={360}
              size="large"
              name="description"
              value={inputValues.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Введите описание"
            />
          </Form.Item>{" "}
          <Form.Item
            style={{ width: "50%" }}
            required
            label="Краткая информация об авторе курса"
          >
            <Input
              width={360}
              size="large"
              name="authorInfo"
              value={inputValues.authorInfo}
              onChange={(e) => handleInputChange("authorInfo", e.target.value)}
              placeholder="Место работы, достижения, образование и т.п."
            />
          </Form.Item>
          <Form.Item style={{ width: "50%" }} required label="Категория">
            <ul className={styles.row}>
              {Array.isArray(categories)
                ? categories?.map((item: ICategory, index) => (
                    <CategoryItem
                      item={item}
                      onSelect={handleSelect}
                      key={index}
                    />
                  ))
                : categories && (
                    <CategoryItem item={categories} onSelect={handleSelect} />
                  )}
            </ul>
          </Form.Item>
          <Form.Item style={{ width: "50%" }} required label="Подтема">
            <SubtopicArticle />
          </Form.Item>
          <Form.Item>
            <Button
              disabled={isButtonDisabled}
              type="primary"
              size="large"
              htmlType="submit"
            >
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </>
  );
};
