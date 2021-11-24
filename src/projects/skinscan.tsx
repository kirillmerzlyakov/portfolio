import React from "react";
import { Menu } from "../components/menu/menu";
import { renderImageBlock, renderTextBlock } from "./common";
import cn from "./projects.module.less";

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

const FOLDER_NAME = "skinscan";

export const SkinScan: React.FunctionComponent = (props) => (
  <div className={cn["projects-content"]}>
    <Menu
      name={"Скиньскан.рф"}
      city={"Екатеринбург"}
      year={"2021"}
      description={
        "блабалбалбалбалбалаблабла блаблб албафыолврф олырвлдфорывлфоыролдфы рвфолыврфолдвр"
      }
    />
    {renderVideoBlock("Act-Contract-0", VIDEO_SOURCES["Act-Contract-0"])}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {renderVideoBlock("Act-Contract-1", VIDEO_SOURCES["Act-Contract-1"])}

    {[2, 3, 4, 5, 6].map((a) => renderImageBlock(FOLDER_NAME, a))}

    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {renderVideoBlock("Act-Contract-2", VIDEO_SOURCES["Act-Contract-2"])}

    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {[8, 9].map((a) => renderImageBlock(FOLDER_NAME, a))}

    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>

    {renderImageBlock(FOLDER_NAME, 10)}

    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[0])}
    </div>
    {[11, 12].map((a) => renderImageBlock(FOLDER_NAME, a))}
  </div>
);

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
