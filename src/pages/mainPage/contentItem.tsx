import React from "react";
import { Link } from "react-router-dom";
import cn from "./mainPage.module.less";

interface Props {
  name: string;
  route: string;
  imgName: string;
  sourceLink?: string;
}

export const ContentItem: React.FunctionComponent<Props> = (props) => (
  <div className={cn["content-item"]}>
    <span className={cn["header"]}>
      <Link className={cn["link"]} to={props.route}>
        <span className={cn["header1"]}>{props.name}</span>
      </Link>
      {props.sourceLink && (
        <a href={props.sourceLink} target="_blank" rel="noreferrer">
          <div className={cn["site-link"]}></div>
        </a>
      )}
    </span>
    <Link to={props.route}>
      {props.imgName ? (
        <img
          className={cn["image"]}
          src={`./tiles/${props.imgName}.jpg`}
          alt="картинка"
        ></img>
      ) : (
        <div className={cn["img-template"]}></div>
      )}
    </Link>
  </div>
);
