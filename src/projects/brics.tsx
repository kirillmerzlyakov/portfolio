import React from "react";
import { Menu } from "../components/menu/menu";
import cn from "./projects.module.less";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { renderImg } from "./common";
import img1 from "./media/brics/1.jpg";
import img2 from "./media/brics/2.jpg";
import img3 from "./media/brics/3.jpg";
import img4 from "./media/brics/4.jpg";
import img5 from "./media/brics/5.jpg";
import img6 from "./media/brics/6.jpg";
import img7 from "./media/brics/7.jpg";
import img8 from "./media/brics/8.jpg";
import img9 from "./media/brics/9.jpg";
import img10 from "./media/brics/10.jpg";
import img11 from "./media/brics/11.jpg";
import img12 from "./media/brics/12.jpg";
import img13 from "./media/brics/13.jpg";
import img14 from "./media/brics/14.jpg";
import img15 from "./media/brics/15.jpg";
import img16 from "./media/brics/16.jpg";

export const Brics: React.FunctionComponent = () => (
  <div className={cn.projectsContent}>
    <Menu
      name={"BRICS competition"}
      city={"Екатеринбург"}
      year={"2021"}
      description={
        "Сайт международного центра конкурентного права и политики БРИКС в Высшей школе экономики. Проект выполнен в виде постоянно обновляющегося журнала, в который авторы подгружают материалы англоязычных докладов, новости, видео и документацию"
      }
      sourceLink="https://bricscompetition.org/"
    />
    {renderImg(img1)}
    <div className={cn.textWrapper}>
      <div className={cn.textBlock}>
        Мне посчастливилось поработать с&nbsp;Международным центром
        конкурентного права и&nbsp;политики БРИКС в&nbsp;Высшей школе экономики.
        Сделала дизайн сайта, который ежедневно пополняется новым контентом уже
        на&nbsp;протяжении года.
      </div>
      <div className={cn.textBlock}>
        Сайт состоит из&nbsp;30&nbsp;веб-страниц. Для каждой отрисованы адптив
        и&nbsp;по&nbsp;несколько задизайненных экранов для всех состояний
        интерактивных блоков.
      </div>
    </div>
    {renderImg(img2)}
    <div className={cn.textWrapper}>
      <div className={cn.textBlockWide}>
        Главная страница включает в&nbsp;себя бесконечную ленту с&nbsp;блоками
        новостей, видео, статей и&nbsp;анонсов событий. При переходе
        в&nbsp;любой из&nbsp;блоков открывается соответствующая страница
        с&nbsp;контентом и&nbsp;подборкой похожих материалов.
      </div>
    </div>
    {[img3, img4, img5].map((src) => renderImg(src))}
    <div className={cn.textWrapper}>
      <div className={cn.textBlock}>
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
      <div className={cn.textBlock}>
        Ниже вы&nbsp;можете полистать брендбук BRICS.
      </div>
    </div>

    <Slideshow />
  </div>
);

const Slideshow = () => {
  return (
    <div className={cn.slideContainer}>
      <Slide>
        {[img8, img9, img10, img11, img12, img13, img14, img15, img16].map(
          (src, index) => (
            <div className={cn.eachSlide} key={index}>
              {renderImg(src)}
            </div>
          )
        )}
      </Slide>
    </div>
  );
};
