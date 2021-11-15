import React from "react";
import "./menu.css";

export class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="description-block">
          <div className="description-header">СкиньСкан.рф</div>
          <div>Екатеринбург | 2021</div>
          <div className="description">
            бла блаблаблабал абла блаблаблабалблабалабла блаблаблабалблабалабла
          </div>
        </div>
        <div className="author">
          Дарина Лачихина
          <br /> дизайнер
        </div>
      </div>
    );
  }
}
