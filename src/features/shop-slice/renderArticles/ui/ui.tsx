"use client";

import { CourseArticle } from "@/entities/course-slice/article";
import styles from "./ui.module.scss";
import { useEffect, useState } from "react";

import { IProduct } from "@/shared/interface/shop";
import { GetProducts } from "../api";
import { ShopArticle } from "@/entities/shop-slice/article";

export const ShopRenderArticles = () => {
  const [shop, setShop] = useState<IProduct[]>();

  useEffect(() => {
    const GetAllProducts = async () => {
      const fetchProducts: IProduct[] | Error = await GetProducts();
      if (fetchProducts instanceof Error) return;
      setShop(fetchProducts);
    };
    GetAllProducts();
  }, []);
  return (
    <>
      <div className={styles.layout}>
        <h1 className={styles.h1}>Магазин</h1>
        <section className={styles.renderCourses}>
          {shop?.map((item) => (
            <ShopArticle product={item} key={item.id} />
          ))}
        </section>
      </div>
    </>
  );
};
