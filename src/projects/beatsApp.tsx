import React from "react";
import { Menu } from "../components/menu/menu";
import { renderImageBlock, renderTextBlock } from "./common";
import cn from "./projects.module.less";

const TEXT_BLOCK = [
  "Для входа в свой кошелек необходимо создать и подтвердить мнемони-ческую фразу. Для этого я придумал интерактивный сценарий.",
];

const FOLDER = "beatsApp";

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
    {renderImageBlock(FOLDER, 1)}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {[2, 3].map((i) => renderImageBlock(FOLDER, i))}
  </div>
);
