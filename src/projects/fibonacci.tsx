import React from "react";
import { Menu } from "../components/menu/menu";
import cn from "./projects.module.less";

const TEXT_BLOCK = [
  "Для входа в свой кошелек необходимо создать и подтвердить мнемони-ческую фразу. Для этого я придумал интерактивный сценарий.",
];

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
    {renderImageBlock(1)}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {[2, 3, 4, 5].map((i) => renderImageBlock(i))}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {renderImageBlock(6)}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {[7, 8, 9].map((i) => renderImageBlock(i))}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {[10, 11, 12].map((i) => renderImageBlock(i))}
  </div>
);

function renderTextBlock(text: string) {
  return <div className={cn["text-block"]}>{text}</div>;
}

function renderImageBlock(number: number) {
  return (
    <img
      className={cn["image"]}
      src={`./fibonacci/${number}.jpg`}
      alt="картинка"
    ></img>
  );
}
