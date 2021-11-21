import React from "react";
import "./menu.css";

interface Props {
  name: string;
  city: string;
  year: string;
  description: string;
}
export const Menu: React.FC<Props> = (props) => (
  <div className="menu">
    <div className="description-block">
      <div className="description-header">{props.name}</div>
      <div>{`${props.city} | ${props.year}`}</div>
      <div className="description">
        _<br />
        <br />
        {props.description}
        <br />
        _<br />
      </div>
    </div>
    <div className="author">
      Дарина Лачихина
      <br /> дизайнер
    </div>
  </div>
);
