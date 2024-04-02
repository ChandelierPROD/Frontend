"use client";

import { CourseArticle } from "@/entities/course-slice/article";
import styles from "./ui.module.scss";
import { useEffect, useState } from "react";
import { ICourse } from "@/shared/interface/course";
import { GetCourses } from "../api";

export const RenderArticles = () => {
  const [courses, setCourse] = useState<ICourse[]>();

  useEffect(() => {
    const GetMyCourses = async () => {
      const fetchCourses: ICourse[] | Error = await GetCourses();
      if (fetchCourses instanceof Error) return;
      setCourse(fetchCourses);
    };
    GetMyCourses();
  }, []);
  return (
    <>
      <div className={styles.layout}>
        <h1 className={styles.h1}>Мои курсы</h1>
        <section className={styles.renderCourses}>
          {courses?.map((item) => (
            <CourseArticle course={item} key={item.id} />
          ))}
        </section>
      </div>
    </>
  );
};
