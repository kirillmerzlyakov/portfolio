import React from "react";
import styles from "./header.module.less";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

export const Header: React.FC = (props) => {
  const { pathname } = useLocation();
  return (
    <div className={styles["header"]}>
      <div className={styles["navigation"]}>
        {pathname !== "/" && renderBackArrow()}
      </div>
      <div className={styles["name"]}>Дарина Лачихина</div>
      <div className={styles["buttons"]}>
        <Link className={styles["button"]} to="/">
          Портфолио
        </Link>
        <div className={cn([styles["button"], styles["bold"]])}>
          <span className={styles["bold"]}>Обо&nbsp;мне</span>
        </div>
        <div className={styles["button"]}>
          <Link className={styles["button"]} to="/contacts">
            Контакты
          </Link>
        </div>
      </div>
    </div>
  );
};

const renderBackArrow = () => (
  <Link className={styles["navigate-link"]} to="/">
    <div className={styles["arrowSvg"]}></div>
    Назад
  </Link>
);
