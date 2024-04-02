import Image from "next/image";
import styles from "./ui.module.scss";
import Flash from "../../../../../public/icons/flash.svg";
import Star from "../../../../../public/icons/star.svg";
import User from "../../../../../public/icons/userCircle.svg";
import Cap from "../../../../../public/icons/graduationCap.svg";
import { ICourse } from "@/shared/interface/course";
import Link from "next/link";
export const CourseArticle = ({ course }: { course: ICourse }) => {
  return (
    <>
      <Link href={`/course/my/${course.id}`}>
        <article className={styles.article}>
          <div className={styles.article__header}>
            <div className={styles.points}>
              <p className={styles.points_text}>{course.points}</p>
              <Image src={Flash} width={16} height={16} alt="Flash" />
            </div>
            <div className={styles.rating}>
              <Image src={Star} width={16} height={16} alt="Star" />
              <p className={styles.rating_text}>{course.grade || 0}</p>
            </div>
          </div>
          <h5 className={styles.name}>{course.title}</h5>
          <div className={styles.article__footer}>
            <div className={styles.footer__item}>
              <Image src={User} width={16} height={16} alt="User" />
              <p className={styles.p}>{course.students}</p>
            </div>
            <div className={styles.footer__item}>
              <Image src={Cap} width={16} height={16} alt="User" />
              <p className={styles.p}>{course.graduates}</p>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};
