import React from "react";
import { Menu } from "../components/menu/menu";
import cn from "./projects.module.less";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { renderImageBlock, renderTextBlock } from "./common";

const TEXT_BLOCK = [
  "Для входа в свой кошелек необходимо создать и подтвердить мнемони-ческую фразу. Для этого я придумал интерактивный сценарий.",
];

const FOLDER_NAME = "brics";

export const Brics: React.FunctionComponent = (props) => (
  <div className={cn["projects-content"]}>
    <Menu
      name={"BRICS competition"}
      city={"Екатеринбург"}
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
    {renderImageBlock(FOLDER_NAME, 2)}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {[3, 4, 5].map((i) => renderImageBlock(FOLDER_NAME, i))}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    <Slideshow />
  </div>
);

const Slideshow = () => {
  return (
    <div className={cn["slide-container"]}>
      <Slide>
        {[8, 9, 10, 11, 12, 13, 14, 15, 16].map((v, index) => (
          <div className={cn["each-slide"]} key={index}>
            {renderImageBlock(FOLDER_NAME, v)}
          </div>
        ))}
      </Slide>
    </div>
  );
};
