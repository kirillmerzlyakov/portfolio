import React from "react";
import { Menu } from "../../components/menu/menu";
import "./chicaga.css";

const TEXT_BLOCK = [
  "Для входа в свой кошелек необходимо создать и подтвердить мнемони-ческую фразу. Для этого я придумал интерактивный сценарий.",
];

export const Chicaga: React.FunctionComponent = (props) => (
  <div className="content-chicaga">
    <Menu
      name={"CHICAGA"}
      city={"Санкт-Петербург"}
      year={"2020"}
      description={
        "блабалбалбалбалбалаблабла блаблб албафыолврф олырвлдфорывлфоыролдфы рвфолыврфолдвр"
      }
    />
    {renderImageBlock(1)}
    <div className="text-wrapper">
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {[2, 3, 4, 5].map((i) => renderImageBlock(i))}
    <div className="text-wrapper">
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {renderImageBlock(6)}
    <div className="text-wrapper">
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {[7, 8, 9].map((i) => renderImageBlock(i))}
    <div className="text-wrapper">
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {[10, 11, 12].map((i) => renderImageBlock(i))}
  </div>
);

function renderTextBlock(text: string) {
  return <div className="text-block">{text}</div>;
}

function renderImageBlock(number: number) {
  return (
    <img className="image" src={`./chicaga/${number}.jpg`} alt="картинка"></img>
  );
}
