import React from "react";
import { Menu } from "../components/menu/menu";
import { renderImg } from "./common";
import cn from "./projects.module.less";
import img1 from "./media/beatsApp/1.jpg";
import img2 from "./media/beatsApp/2.jpg";
import img3 from "./media/beatsApp/3.jpg";

export const BeatsApp: React.FC = () => (
  <div className={cn.projectsContent}>
    <Menu
      name={"BeatsApp"}
      city={"Тель-Авив"}
      year={"2021"}
      description={
        <span>
          Стриминговый сервис, позволяющий легально прослушивать музыкальные
          композиции, аудиокниги и&nbsp;подкасты, не&nbsp;скачивая
          их&nbsp;на&nbsp;устройство. Доступен в&nbsp;виде приложений для всех
          операционных систем.
        </span>
      }
    />
    {renderImg(img1)}
    <div className={cn.textWrapper}>
      <div className={cn.textBlock}>
        BeatsApp&nbsp;&mdash; мобильное приложене для прослушивания музыки,
        которое я&nbsp;разрабатывала для стартапа из&nbsp;Израиля. Ниже
        представлены несколько экранов, которые раскрывают суть проекта.
        Приложение еще находится в&nbsp;разработке.
      </div>
    </div>
    {renderImg(img2)}
    {renderImg(img3)}
  </div>
);
