import Image from "next/image";
import styles from "./ui.module.scss";
import Plus from "../../../../../public/icons/plus.svg";
import { useState } from "react";
import { SubTopicArticleModal } from "../modal";
export const SubtopicArticle = ({
  type = "add",
}: {
  type?: "add" | "added";
}) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <>
      <SubTopicArticleModal isOpen={isModalOpen} setOpen={setModalOpen} />
      {type === "add" && (
        <article
          onClick={() => setModalOpen(!isModalOpen)}
          className={styles.added_article}
        >
          <Image src={Plus} width={24} height={24} alt="Added" />
          <h4 className={styles.h4}>Добавить секцию</h4>
        </article>
      )}
    </>
  );
};
