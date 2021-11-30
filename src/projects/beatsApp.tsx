import React from "react";
import { Menu } from "../components/menu/menu";
import { renderImageBlock } from "./common";
import cn from "./projects.module.less";

const FOLDER_NAME = "beatsApp";

export const BeatsApp: React.FunctionComponent = (props) => (
  <div className={cn["projects-content"]}>
    <Menu
      name={"BeatsApp"}
      city={"Тель-Авив"}
      year={"2021"}
      description={
        "Стриминговый сервис, позволяющий легально прослушивать музыкальные композиции, аудиокниги и подкасты, не скачивая их на устройство. Доступен в виде приложений для всех операционных систем."
      }
    />
    {renderImageBlock(FOLDER_NAME, 1)}
    <div className={cn["text-wrapper"]}>
      <div className={cn["text-block"]}>
        BeatsApp&nbsp;&mdash; мобильное приложене для прослушивания музыки,
        которое я&nbsp;разрабатывала для стартапа из&nbsp;Израиля. Ниже
        представлены несколько экранов, которые раскрывают суть проекта.
        Приложение еще находится в&nbsp;разработке.
      </div>
    </div>
    {[2, 3].map((i) => renderImageBlock(FOLDER_NAME, i))}
  </div>
);
