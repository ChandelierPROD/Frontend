import Bag from "../../../../public/icons/bag.svg";
import Profile from "../../../../public/icons/profile.svg";
import Plus from "../../../../public/icons/plus-black.svg";
import { IHeaderItem } from "@/shared/interface/header";
import Stat from "../../../../public/icons/stat.svg";
import Shop from "../../../../public/icons/discount.svg";
export const SideNavBarItems: IHeaderItem[] = [
  {
    title: "Курсы",
    path: "/course/my",
    icon: Bag,
    submenu: true,
    subMenuItems: [
      { title: "Создать курс", path: "/course/add", icon: Plus },
      { title: "Мои курсы", path: "/course/my" },
    ],
  },
  {
    title: "Статистика",
    path: "/stat",
    icon: Stat,
    submenu: false,
  },
  {
    title: "Магазин",
    path: "/shop",
    icon: Shop,
    submenu: false,
  },
];

export const SideBarProfileItem: IHeaderItem = {
  title: "Профиль",
  path: "/profile",
  icon: Profile,
  submenu: false,
};
