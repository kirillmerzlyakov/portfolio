import React from "react";
import { Menu } from "../components/menu/menu";
import { renderImageBlock, renderTextBlock } from "./common";
import cn from "./projects.module.less";

const TEXT_BLOCK = [
  "Для входа в свой кошелек необходимо создать и подтвердить мнемони-ческую фразу. Для этого я придумал интерактивный сценарий.",
];
const FOLDER_NAME = "fibonacci";

export const Fibonacci: React.FunctionComponent = (props) => (
  <div className={cn["projects-content"]}>
    <Menu
      name={"Fibonacci"}
      city={"Москва"}
      year={"2021"}
      description={
        "блабалбалбалбалбалаблабла блаблб албафыолврф олырвлдфорывлфоыролдфы рвфолыврфолдвр"
      }
    />
    {renderImageBlock(FOLDER_NAME, 1)}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {[2, 3, 4, 5].map((i) => renderImageBlock(FOLDER_NAME, i))}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {renderImageBlock(FOLDER_NAME, 6)}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {[7, 8, 9].map((i) => renderImageBlock(FOLDER_NAME, i))}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {[10, 11, 12].map((i) => renderImageBlock(FOLDER_NAME, i))}
  </div>
);
