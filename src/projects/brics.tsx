import React from "react";
import { Menu } from "../components/menu/menu";
import cn from "./projects.module.less";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const TEXT_BLOCK = [
  "Для входа в свой кошелек необходимо создать и подтвердить мнемони-ческую фразу. Для этого я придумал интерактивный сценарий.",
];

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
    {renderImageBlock(1)}

    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {renderImageBlock(2)}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {[3, 4, 5].map((i) => renderImageBlock(i))}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    <Slideshow />
  </div>
);

function renderTextBlock(text: string) {
  return <div className="text-block">{text}</div>;
}

function renderImageBlock(number: number) {
  return (
    <div className={cn["img-wrapper"]}>
      <img className="image" src={`./brics/${number}.jpg`} alt="картинка"></img>
    </div>
  );
}

const Slideshow = () => {
  return (
    <div className={cn["slide-container"]}>
      <Slide>
        {[8, 9, 10, 11, 12, 13, 14, 15, 16].map((v, index) => (
          <div className={cn["each-slide"]} key={index}>
            {renderImageBlock(v)}
          </div>
        ))}
      </Slide>
    </div>
  );
};
