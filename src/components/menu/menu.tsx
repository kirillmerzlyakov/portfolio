import React from "react";
import cn from "./menu.module.less";

interface Props {
  name: string;
  city: string;
  year: string;
  description: string;
  sourceLink?: string;
}
export const Menu: React.FC<Props> = (props) => (
  <div className={cn["menu"]}>
    <div className={cn["description-block"]}>
      <div className={cn["description-header"]}>{props.name}</div>
      <div
        className={cn["description-city"]}
      >{`${props.city} | ${props.year}`}</div>
      <div className={cn["description"]}>
        _<br />
        <br />
        {props.description}
        <br />
        _<br />
      </div>
      {props.sourceLink && (
        <div className={cn["source-link-wrapper"]}>
          <a
            className={cn["source-link"]}
            href={props.sourceLink}
            target="_blank"
            rel="noreferrer"
          >
            ссылка на сайт
          </a>
        </div>
      )}
    </div>
    <div className={cn["author"]}>
      Дарина Лачихина
      <br /> дизайнер
    </div>
  </div>
);
