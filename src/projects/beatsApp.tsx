import React from "react";
import { Menu } from "../components/menu/menu";
import { renderImageBlock, renderTextBlock } from "./common";
import cn from "./projects.module.less";

const TEXT_BLOCK = [
  "BeatsApp – мобильное приложене для прослушивания музыки, которое я разрабатывала для стартапа из Израиля.",
  "Ниже представлены несколько экранов, которые раскрывают суть проекта. Приложение еще находится в разработке.",

];

const FOLDER_NAME = "beatsApp";

export const BeatsApp: React.FunctionComponent = (props) => (
  <div className={cn["projects-content"]}>
    <Menu
      name={"BeatsApp"}
      city={"Тель-Авив"}
      year={"2021"}
      description={
        "блабалбалбалбалбалаблабла блаблб албафыолврф олырвлдфорывлфоыролдфы рвфолыврфолдвр"
      }
    />
    {renderImageBlock(FOLDER_NAME, 1)}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[1])}
    </div>
    {[2, 3].map((i) => renderImageBlock(FOLDER_NAME, i))}
  </div>
);
