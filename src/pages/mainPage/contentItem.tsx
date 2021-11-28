import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "./mainPage.module.less";

interface Props {
  name: string;
  route: string;
  imgName: string;
  sourceLink?: string;
}

export const ContentItem: React.FunctionComponent<Props> = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className={cn["content-item"]}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <span className={cn["header"]}>
        <Link className={cn["link"]} to={props.route}>
          <span className={cn["header1"]}>{props.name}</span>
        </Link>
      </span>
      <Link to={props.route}>
        {props.imgName ? (
          <div className={cn["image1"]}>
            <img
              className={cn["image"]}
              src={`./tiles/${props.imgName}.${false ? "gif" : "jpg"}`}
              alt="картинка"
            ></img>
          </div>
        ) : (
          <div className={cn["img-template"]}></div>
        )}
      </Link>
    </div>
  );
};
