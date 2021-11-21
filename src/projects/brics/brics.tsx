import React from "react";
import { Menu } from "../../components/menu/menu";
import "./brics.css";

export const Brics: React.FunctionComponent = (props) => (
  <div className="content-skinscan">
    <Menu
      name={"BRICS"}
      city={"Екатеринбург"}
      year={"2021"}
      description={
        "блабалбалбалбалбалаблабла блаблб албафыолврф олырвлдфорывлфоыролдфы рвфолыврфолдвр"
      }
    />
    {[2, 3, 4, 5, 6].map((a) => getImageBlock(a.toString()))}
    
  </div>
);

function getImageBlock(number: string) {
  return (
    <div className="img-wrapper">
      <img
        className="image"
        src={`./brics/${number}.jpg`}
        alt="картинка"
      ></img>
    </div>
  );
}
