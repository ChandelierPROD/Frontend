import { Button, Form, Input, Modal, Space } from "antd";
import styles from "./ui.module.scss";

export const SubTopicArticleModal = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
}) => {
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        open={isOpen}
        title={<h2 className={styles.title}>Добавить тему</h2>}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" size="middle" type="primary">
            Сохранить тему
          </Button>,
          <Button
            onClick={handleCancel}
            key="back"
            type="primary"
            danger
            size="middle"
          >
            Назад
          </Button>,
        ]}
      >
        <Space style={{ width: "100%" }} direction="vertical">
          <Input size="large" placeholder="Название темы" />
          <Input size="large" placeholder="Ссылка на лекцию (YouTube)" />
          <label className={styles.task}>Задания</label>
          <Input size="large" placeholder="Описание задачу" />
          <Space style={{ width: "100%", justifyContent: "space-between" }}>
            <Input
              style={{ width: "250px" }}
              size="large"
              placeholder="Правильный ответ"
            />
            <Button size="large" type="primary">
              Добавить изображение
            </Button>
          </Space>
        </Space>
      </Modal>
    </>
  );
};
