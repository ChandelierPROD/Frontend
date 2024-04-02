import Image from "next/image";
import styles from "./ui.module.scss";
import Flash from "../../../../../public/icons/flash.svg";
import Star from "../../../../../public/icons/star.svg";
import User from "../../../../../public/icons/userCircle.svg";
import Cap from "../../../../../public/icons/graduationCap.svg";
export const CourseArticle = () => {
  return (
    <>
      <article className={styles.article}>
        <div className={styles.article__header}>
          <div className={styles.points}>
            <p className={styles.points_text}>14</p>
            <Image src={Flash} width={16} height={16} alt="Flash" />
          </div>
          <div className={styles.rating}>
            <Image src={Star} width={16} height={16} alt="Star" />
            <p className={styles.rating_text}>5.0</p>
          </div>
        </div>
        <h5 className={styles.name}>Программирование на Python</h5>
        <div className={styles.article__footer}>
          <div className={styles.footer__item}>
            <Image src={User} width={16} height={16} alt="User" />
            <p className={styles.p}>233</p>
          </div>
          <div className={styles.footer__item}>
            <Image src={Cap} width={16} height={16} alt="User" />
            <p className={styles.p}>233</p>
          </div>
        </div>
      </article>
    </>
  );
};
