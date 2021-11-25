import React from "react";
import { Menu } from "../components/menu/menu";
import cn from "./projects.module.less";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { renderImageBlock, renderTextBlock } from "./common";

const TEXT_BLOCK = [
  "Мне посчастливилось поработать с Международным центром конкурентного права и политики БРИКС в Высшей школе экономики. Сделала дизайн сайта, который ежедневно пополняется новым контентом уже на протяжении года.",
  "Сайт состоит из 30 веб-страниц. Для каждой отрисованы адптив и по несколько задизайненных экранов для всех состояний интерактивных блоков.",
  "Главная страница включает в себя бесконечную ленту с блоками  новостей, видео, статей и анонсов событий.",
  "При переходе в любой из блоков открывается соответствующая страница с контентом и подборкой похожих материалов.",
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
      {renderTextBlock(TEXT_BLOCK[1])}
    </div>
    {renderImageBlock(FOLDER_NAME, 2)}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[2])}
      {renderTextBlock(TEXT_BLOCK[3])}
    </div>
    {[3, 4, 5].map((i) => renderImageBlock(FOLDER_NAME, i))}
    <div className={cn["text-wrapper"]}>
      <div className="text-block">
        Фирменный стиль для проекта был тоже разработан мною. Логотипом
        занимался мой коллега дизайнер{" "}
        <a
          href="https://www.facebook.com/adverfreak?hc_ref=ARTYTB6yPr1P02-JL9Z4FhrqVsNU8dZQ215nKZtkSiAZmqps3Wb7Eb3P3X5AKskiOuY&fref=nf"
          target="_blank"
        >
          Андрей Черный
        </a>
        . Ниже вы можете полистать брендбук BRICS.
      </div>
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
