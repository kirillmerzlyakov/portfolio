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
    <div className={cn["content-item-header"]}>
      <Link className={cn["content-item-link"]} to={props.route}>
        <div className={cn["content-item-header1"]}>{props.name}</div>
      </Link>
      {props.sourceLink && (
        <a href={props.sourceLink} target="_blank" rel="noreferrer">
          <div className={cn["site-link"]}></div>
        </a>
      )}
    </div>
    <Link to={props.route}>
      <div className={cn["content-item-img"]}>{/* <img ></img> */}</div>
    </Link>
  </div>
);
