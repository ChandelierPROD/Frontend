"use client";

import styles from "./ui.module.scss";
import Asset from "../../../../../public/assets/avatarSkeleton.svg";
import Image from "next/image";
import Flash from "../../../../../public/icons/flash-white.svg";
import { IProduct } from "@/shared/interface/shop";

export const ShopArticle = ({ product }: { product: IProduct }) => {
  return (
    <>
      <article key={product.id} className={styles.article}>
        <Image
          className={styles.img}
          src={product.image ? product.image : Asset}
          width={100}
          height={106}
          alt="Cover"
        />
        <div className={styles.info}>
          <span className={styles.info_layout}>
            <h4 className={styles.h4}>{product.title}</h4>
            <p className={styles.p}>{product.description}</p>
          </span>
          <span className={styles.points}>
            <p className={styles.pointsCount}>-{product.price}</p>
            <Image src={Flash} width={16} height={16} alt="Points" />
          </span>
        </div>
      </article>
    </>
  );
};
