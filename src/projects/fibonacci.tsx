import React from "react";
import { Menu } from "../components/menu/menu";
import { renderImageBlock, renderTextBlock, renderVideoBlock } from "./common";
import cn from "./projects.module.less";
import { Slide } from "react-slideshow-image";

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
    {renderImageBlock(FOLDER_NAME, 2)}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {[3, 4, 5, 6].map((i) => renderImageBlock(FOLDER_NAME, i))}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {/* //video */}
    {renderVideoBlock("Fibonacci", "https://player.vimeo.com/video/649489917")}

    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {[7, 8, 9, 10].map((i) => renderImageBlock(FOLDER_NAME, i))}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {/* slider 11-20 */}
    {Slideshow()}
  </div>
);

const Slideshow = () => {
  return (
    <div className={cn["slide-container"]}>
      <Slide>
        {[11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((v, index) => (
          <div className={cn["each-slide"]} key={index}>
            {renderImageBlock(FOLDER_NAME, v)}
          </div>
        ))}
      </Slide>
    </div>
  );
};
