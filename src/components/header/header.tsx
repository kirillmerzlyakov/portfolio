import React from "react";
import cn from "./header.module.less";
import { Link } from "react-router-dom";

export const Header: React.FC = (props) => (
  <div className={cn["header"]}>
    <div className={cn["navigation"]}>{renderBackArrow()}</div>
    <div className={cn["header-main"]}>Дарина Лачихина</div>
    <div className={cn["header-buttons"]}>
      <Link className={cn["header-button"]} to="/">
        Портфолио
      </Link>
      <div className={cn["header-button"]}>Обо&nbsp;мне</div>
      <div className={cn["header-button"]}>
        <Link className={cn["header-button"]} to="/contacts">
          Контакты
        </Link>
      </div>
    </div>
  </div>
);

const renderBackArrow = () => (
  <Link className={cn["navigate-link"]} to="/">
    <div className={cn["arrowSvg"]}></div>
    Назад
  </Link>
);
