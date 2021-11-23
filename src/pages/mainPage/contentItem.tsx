import React from "react";
import { Link } from "react-router-dom";
import "./mainPage.css";

interface Props {
  name: string;
  route: string;
  imgName: string;
  sourceLink?: string;
}

export const ContentItem: React.FunctionComponent<Props> = (props) => (
  <div className="content-item">
    <div className="content-item-header">
      <Link className="content-item-link" to={props.route}>
        <div className="content-item-header1">{props.name}</div>
      </Link>
      {props.sourceLink && (
        <a href={props.sourceLink} target="_blank">
          сайт
        </a>
      )}
    </div>
    <Link to={props.route}>
      <div className="content-item-img">{/* <img ></img> */}</div>
    </Link>
  </div>
);
