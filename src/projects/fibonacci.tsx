import React from "react";
import { Menu } from "../components/menu/menu";
import { renderImg, renderVideoBlock } from "./common";
import cn from "./projects.module.less";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "./media/fibonacci/1.jpg";
import img2 from "./media/fibonacci/2.jpg";
import img3 from "./media/fibonacci/3.jpg";
import img4 from "./media/fibonacci/4.jpg";
import img5 from "./media/fibonacci/5.jpg";
import img6 from "./media/fibonacci/6.jpg";
import img7 from "./media/fibonacci/7.jpg";
import img8 from "./media/fibonacci/8.jpg";
import img9 from "./media/fibonacci/9.jpg";
import img10 from "./media/fibonacci/10.jpg";
import img11 from "./media/fibonacci/11.jpg";
import img12 from "./media/fibonacci/12.jpg";
import img13 from "./media/fibonacci/13.jpg";
import img14 from "./media/fibonacci/14.jpg";
import img15 from "./media/fibonacci/15.jpg";
import img16 from "./media/fibonacci/16.jpg";
import img17 from "./media/fibonacci/17.jpg";
import img18 from "./media/fibonacci/18.jpg";
import img19 from "./media/fibonacci/19.jpg";
import img20 from "./media/fibonacci/20.jpg";

export const Fibonacci: React.FC = () => (
  <div className={cn.projectsContent}>
    <Menu
      name={"Fibonacci"}
      city={"Москва"}
      year={"2021"}
      description={
        "Компания FIBONACCI GROUP с 2011 года занимается строительством жилых и общественных зданий по индивидуальному проекту. Портфолио насчитывает более 100 000 кв. м объектов недвижимости бизнес- и премиум-класса."
      }
      sourceLink={"http://a.elpycode.ru"}
    />
    {renderImg(img1)}
    <div className={cn.textWrapper}>
      <div className={cn.textBlock}>
        Fibonacci. Московская компания-бутик, которая создает жилое пространство
        фокусируясь на&nbsp;качестве объектов недвижимости, быстрых сроках
        их&nbsp;реализации.
      </div>
      <div className={cn.textBlock}>
        Заказчик имел определенные предпочтения по&nbsp;цветовой палире,
        стилистике и&nbsp;шрифтам. Поэтому работа началась с&nbsp;составления
        брендбука и&nbsp;key-visual.
      </div>
    </div>
    {renderImg(img2)}
    <div className={cn.textWrapper}>
      <div className={cn.textBlock}>
        В&nbsp;течение работы над проектом, я&nbsp;разработала несколько
        концепций главной страницы. Ниже представлен финальный вариант, который
        был передан в&nbsp;верстку.
      </div>
      <div className={cn.textBlock}>
        Мы&nbsp;утвердили концепцию, в&nbsp;которой основная страница
        не&nbsp;имеет акцентных блоков и&nbsp;ярких цветов, а&nbsp;для каждого
        ЖК&nbsp;Fibonacci Group был подобрана своя контрастная насыщенная
        палитра.
      </div>
    </div>
    {[img3, img4, img5, img6].map((src) => renderImg(src))}
    <div className={cn.textWrapper}>
      <div className={cn.textBlockWide}>
        Прототип-демонстрация работы блока внутренних страниц
        ЖК&nbsp;Fibonacci&nbsp;Group. Для&nbsp;каждого проекта обязательно
        прорабатываю взаимодействия и&nbsp;анимацию. Во-первых это помогает
        утвердить сайт с&nbsp;клиентом. Во-вторых упрощает жизнь разработчикам.
      </div>
    </div>
    {renderVideoBlock("Fibonacci", "https://player.vimeo.com/video/649489917")}

    <div className={cn.textWrapper}>
      <div className={cn.textBlock}>
        Для внутренних страниц сайта&nbsp;&mdash; страниц жилищных комплексов
        был отрисован общий шаблон.
      </div>
      <div className={cn.textBlock}>
        Hero block содержит в&nbsp;себе фото и&nbsp;видео комплекса,
        перелинковку на&nbsp;официальную страницу&nbsp;ЖК и&nbsp;основную
        инфорацию о&nbsp;проекте. Далее идет описание со&nbsp;слацдерами фото
        и&nbsp;интерактивная карта с&nbsp;местоположением комплекса.
      </div>
    </div>
    {[img7, img8, img9, img10].map((src) => renderImg(src))}
    <div className={cn.textWrapper}>
      <div className={cn.textBlock}>
        Гайдлайн помогает сориентироваться и&nbsp;помогает понять как
        и&nbsp;когда использовать разные версии логотипа. Вы&nbsp;можете
        полистать его ниже.
      </div>
      <div className={cn.textBlock}>
        Для Fibonacci были придуманы несколько версий логотипа
        и&nbsp;полноценная айдентика: фирменный паттерн, графические элементы
        и&nbsp;иконки, стиль оформления социальных сетей, постеры
        и&nbsp;плакаты, уличная реклама, визитные карточки и&nbsp;конверты.
      </div>
    </div>
    <Slideshow />
  </div>
);

const Slideshow = () => {
  return (
    <div className={cn.slideContainer}>
      <Slide>
        {[
          img11,
          img12,
          img13,
          img14,
          img15,
          img16,
          img17,
          img18,
          img19,
          img20,
        ].map((src, index) => (
          <div className={cn.eachSlide} key={index}>
            {renderImg(src)}
          </div>
        ))}
      </Slide>
    </div>
  );
};
