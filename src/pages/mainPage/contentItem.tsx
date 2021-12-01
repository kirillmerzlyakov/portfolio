import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "./mainPage.module.less";

interface Props {
  name: string;
  route: string;
  imgSrc: string;
  gifSrc: string;
}

export const ContentItem: React.FunctionComponent<Props> = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className={cn.contentItem}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <span className={cn.header}>
        <Link className={cn.link} to={props.route}>
          <span className={cn.header1}>{props.name}</span>
        </Link>
      </span>
      <Link to={props.route}>
        <img
          className={cn.itemImage}
          src={isHovering ? props.gifSrc : props.imgSrc}
          alt="картинка"
        ></img>
      </Link>
    </div>
  );
};
