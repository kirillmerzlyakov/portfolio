import React from "react";
import { Menu } from "../../components/menu/menu";
import "./brics.css";

const TEXT_BLOCK = [
  "Для входа в свой кошелек необходимо создать и подтвердить мнемони-ческую фразу. Для этого я придумал интерактивный сценарий.",
];

export const Brics: React.FunctionComponent = (props) => (
  <div className="content-skinscan">
    <Menu
      name={"BRICS competition"}
      city={"Екатеринбург"}
      year={"2021"}
      description={
        "блабалбалбалбалбалаблабла блаблб албафыолврф олырвлдфорывлфоыролдфы рвфолыврфолдвр"
      }
    />
    {renderImageBlock(1)}

    <div className="text-wrapper">
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {renderImageBlock(2)}
  </div>
);

function renderTextBlock(text: string) {
  return <div className="text-block">{text}</div>;
}

function renderImageBlock(number: number) {
  return (
    <div className="img-wrapper">
      <img className="image" src={`./brics/${number}.jpg`} alt="картинка"></img>
    </div>
  );
}
