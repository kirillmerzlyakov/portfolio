import React from "react";
import { Menu } from "../components/menu/menu";
import { renderImg, renderVideoBlock } from "./common";
import cn from "./projects.module.less";
import img2 from "./media/skinscan/2.jpg";
import img3 from "./media/skinscan/3.jpg";
import img4 from "./media/skinscan/4.jpg";
import img5 from "./media/skinscan/5.jpg";
import img6 from "./media/skinscan/6.jpg";
import img7 from "./media/skinscan/7.jpg";
import img8 from "./media/skinscan/8.jpg";
import img9 from "./media/skinscan/9.jpg";
import img10 from "./media/skinscan/10.jpg";
import img11 from "./media/skinscan/11.jpg";
import img12 from "./media/skinscan/12.jpg";

const VIDEO_SOURCES: { [key: string]: string } = {
  "Act-Contract-0": "https://player.vimeo.com/video/643858135",
  "Act-Contract-1":
    "https://player.vimeo.com/video/645741904?h=4571ce8281&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "Act-Contract-2":
    "https://player.vimeo.com/video/645741574?h=f4882dc24c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
};

export const SkinScan: React.FunctionComponent = () => {
  return (
    <div className={cn["projects-content"]}>
      <Menu
        name={"Скиньскан.рф"}
        city={"Екатеринбург"}
        year={"2021"}
        description={
          "Онлайн-редактор Скиньскан позволяет подписывать документы в форматах doc, pdf, jpg, png в один клик. Просто загрузите документ и скан или фото подписи и печати. Загрузи документ. PDF, Word, Excel, скан или даже фото! Удали лишние и добавь нужные страницы. Добавь подпись и печать."
        }
        sourceLink={"https://скиньскан.рф"}
      />
      {renderVideoBlock("Act-Contract-0", VIDEO_SOURCES["Act-Contract-0"])}
      <div className={cn["text-wrapper"]}>
        <div className={cn["text-block"]}>
          В&nbsp;январе 2021&nbsp;я получила запрос на&nbsp;редизайн готового
          продукта Act-Contract (старое название). Интерфейс сервиса устарел,
          не&nbsp;выполнял все задачи клиента, фирменный стиль хотелось
          освежить.
        </div>
        <div className={cn["text-block"]}>
          Вместе с&nbsp;заказчиком мы&nbsp;провели полный ребрендинг
          и&nbsp;сменили название. Я&nbsp;выбрала новые фирменные цвета
          и&nbsp;шрифты, отрисовала логотип и&nbsp;иллюстрации.
        </div>
      </div>
      {renderImg(img11)}
      {renderImg(img12)}
      <div className={cn["text-wrapper"]}>
        <div className={cn["text-block"]}>
          Основной задачей было сделать новый дизайн сервиса удобным
          и&nbsp;интуитивно понятным с&nbsp;минимальным пользовательским путем.
          Кроме того, мы&nbsp;хотели внедрить в&nbsp;него новые функции,
          не&nbsp;меняя старые прототипы глобально.
        </div>
        <div className={cn["text-block"]}>
          Вот, что получилось. Панель управления элементами справа.
          Слева&nbsp;&mdash; навигация по&nbsp;документу и&nbsp;панель
          добавления элементов, с&nbsp;возможностью подгружать новые
          и&nbsp;использовать ранее загруженные.
        </div>
      </div>
      {renderImg(img8)}
      {renderImg(img9)}
      <div className={cn["text-wrapper"]}>
        <div className={cn["text-block-wide"]}>
          Мы&nbsp;спроектировали интерфейс оплаты и&nbsp;оформления подписки
          на&nbsp;сервис с&nbsp;интерактивной картой, в&nbsp;которую нужно
          ввести данные. Такое решение нативно и&nbsp;удобно.
        </div>
      </div>
      {renderImg(img10)}
      <div className={cn["text-wrapper"]}>
        <div className={cn["text-block-wide"]}>
          Далее нами с&nbsp;клиентом было принято решение по&nbsp;разработке
          продающего лендинга. Продукт завоевал достаточно крупную аудиторию
          на&nbsp;российском рынке, теперь мы&nbsp;были готовы выйти
          на&nbsp;международный.
        </div>
      </div>
      {[img2, img3, img4, img5, img6, img7].map((src) => renderImg(src))}
      <div className={cn["text-wrapper"]}>
        <div className={cn["text-block-wide"]}>
          Для каждого проекта обязательно прорабатываю взаимодействия
          и&nbsp;анимацию&nbsp;&mdash; это&nbsp;неотъемлемая часть хорошего
          пользовательского опыта.
        </div>
      </div>
      {renderVideoBlock("Act-Contract-1", VIDEO_SOURCES["Act-Contract-1"])}
      {renderVideoBlock("Act-Contract-2", VIDEO_SOURCES["Act-Contract-2"])}
    </div>
  );
};
