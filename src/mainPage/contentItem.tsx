import React from "react";
import { Link } from "react-router-dom";
import "./mainPage.css";

interface Props {
  name: string;
  route: string;
  imgName: string;
}

export const ContentItem: React.FunctionComponent<Props> = (props) => (
  <div className="content-item">
    <Link className="content-item-link" to={props.route}>
      <div className="content-item-header">{props.name}</div>
    </Link>
    <Link to={props.route}>
      <div className="content-item-img">{/* <img ></img> */}</div>
    </Link>
  </div>
);
