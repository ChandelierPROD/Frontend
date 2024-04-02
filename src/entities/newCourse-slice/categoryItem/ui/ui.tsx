import { ICategory } from "@/shared/interface/course";
import styles from "./ui.module.scss";

export const CategoryItem = ({
  item,
  onSelect,
}: {
  item: ICategory | null;
  onSelect?: (value: number) => void;
}) => {
  const handleRectangleClick = (id: number) => {
    onSelect && onSelect(id);
  };
  return (
    <>
      <li
        key={item?.id}
        style={{ background: item?.isSelect ? "#00D7B7" : undefined }}
        onClick={() => handleRectangleClick(item ? item.id : 0)}
        className={styles.category}
      >
        {item?.category}
      </li>
    </>
  );
};
