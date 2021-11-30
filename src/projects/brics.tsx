import React from "react";
import { Menu } from "../components/menu/menu";
import cn from "./projects.module.less";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { renderImageBlock } from "./common";

const FOLDER_NAME = "brics";

export const Brics: React.FunctionComponent = () => (
  <div className={cn["projects-content"]}>
    <Menu
      name={"BRICS competition"}
      city={"Екатеринбург"}
      year={"2021"}
      description={
        "Сайт международного центра конкурентного права и политики БРИКС в Высшей школе экономики. Проект выполнен в виде постоянно обновляющегося журнала, в который авторы подгружают материалы англоязычных докладов, новости, видео и документацию"
      }
      sourceLink="https://bricscompetition.org/"
    />
    {renderImageBlock(FOLDER_NAME, 1)}
    <div className={cn["text-wrapper"]}>
      <div className={cn["text-block"]}>
        Мне посчастливилось поработать с&nbsp;Международным центром
        конкурентного права и&nbsp;политики БРИКС в&nbsp;Высшей школе экономики.
        Сделала дизайн сайта, который ежедневно пополняется новым контентом уже
        на&nbsp;протяжении года.
      </div>
      <div className={cn["text-block"]}>
        Сайт состоит из&nbsp;30&nbsp;веб-страниц. Для каждой отрисованы адптив
        и&nbsp;по&nbsp;несколько задизайненных экранов для всех состояний
        интерактивных блоков.
      </div>
    </div>
    {renderImageBlock(FOLDER_NAME, 2)}
    <div className={cn["text-wrapper"]}>
      <div className={cn["text-block-wide"]}>
        Главная страница включает в&nbsp;себя бесконечную ленту с&nbsp;блоками
        новостей, видео, статей и&nbsp;анонсов событий. При переходе
        в&nbsp;любой из&nbsp;блоков открывается соответствующая страница
        с&nbsp;контентом и&nbsp;подборкой похожих материалов.
      </div>
    </div>
    {[3, 4, 5].map((i) => renderImageBlock(FOLDER_NAME, i))}
    <div className={cn["text-wrapper"]}>
      <div className={cn["text-block"]}>
        Фирменный стиль для проекта был тоже разработан мною.
        Логотипом&nbsp;занимался мой коллега дизайнер{" "}
        <a
          href="https://www.facebook.com/adverfreak?hc_ref=ARTYTB6yPr1P02-JL9Z4FhrqVsNU8dZQ215nKZtkSiAZmqps3Wb7Eb3P3X5AKskiOuY&fref=nf"
          target="_blank"
          rel="noreferrer"
        >
          Андрей&nbsp;Черный
        </a>
        .
      </div>
      <div className={cn["text-block"]}>
        Ниже вы&nbsp;можете полистать брендбук BRICS.
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
