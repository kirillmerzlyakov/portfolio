import React from "react";
import cn from "./header.module.less";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <div className={cn["header"]}>
        <div className={cn["navigation"]}>{renderBackArrow()}</div>
        <div className={cn["main"]}>Дарина Лачихина</div>
        <div className={cn["buttons"]}>
          <Link className={cn["button"]} to="/">
            Портфолио
          </Link>
          <div className={cn["button"]}>Обо&nbsp;мне</div>
          <div className={cn["button"]}>
            <Link className={cn["button"]} to="/contacts">
              Контакты
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const renderBackArrow = () => (
  <Link className={cn["navigate-link"]} to="/">
    <div className={cn["arrowSvg"]}></div>
    Назад
  </Link>
);
