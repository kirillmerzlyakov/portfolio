import React from "react";
import { Menu } from "../components/menu/menu";
import "./projects.css";

const VIDEO_SOURCES: { [key: string]: string } = {
  "Act-Contract-0": "https://player.vimeo.com/video/643858135",
  "Act-Contract-1":
    "https://player.vimeo.com/video/645741904?h=4571ce8281&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "Act-Contract-2":
    "https://player.vimeo.com/video/645741574?h=f4882dc24c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
};

const TEXT_BLOCK = [
  "Для входа в свой кошелек необходимо создать и подтвердить мнемони-ческую фразу. Для этого я придумал интерактивный сценарий.",
];

export const SkinScan: React.FunctionComponent = (props) => (
  <div className="projects-content">
    <Menu
      name={"Скиньскан.рф"}
      city={"Екатеринбург"}
      year={"2021"}
      description={
        "блабалбалбалбалбалаблабла блаблб албафыолврф олырвлдфорывлфоыролдфы рвфолыврфолдвр"
      }
    />
    {renderVideoBlock("Act-Contract-0", VIDEO_SOURCES["Act-Contract-0"])}
    <div className="text-wrapper">
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {renderVideoBlock("Act-Contract-1", VIDEO_SOURCES["Act-Contract-1"])}

    {[2, 3, 4, 5, 6].map((a) => renderImageBlock(a))}

    <div className="text-wrapper">
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {renderVideoBlock("Act-Contract-2", VIDEO_SOURCES["Act-Contract-2"])}

    <div className="text-wrapper">
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {[8, 9].map((a) => renderImageBlock(a))}

    <div className="text-wrapper">
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>

    {renderImageBlock(10)}

    <div className="text-wrapper">
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {[11, 12].map((a) => renderImageBlock(a))}
  </div>
);

function renderTextBlock(text: string) {
  return <div className="text-block">{text}</div>;
}

function renderImageBlock(number: number) {
  return (
    <div className="img-wrapper">
      <img
        className="image"
        src={`./skinscan/${number}.jpg`}
        alt="картинка"
      ></img>
    </div>
  );
}

function renderVideoBlock(title: string, src: string) {
  return (
    <iframe
      src={src}
      frameBorder="0"
      width="1120"
      height="630"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title={title}
    ></iframe>
  );
}
