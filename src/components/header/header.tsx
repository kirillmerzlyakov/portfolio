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
        <Link
          className={cn(styles["button"], pathname === "/" && styles["bold"])}
          to="/"
        >
          Портфолио
        </Link>
        <div className={styles["button"]}>
          <Link
            className={cn(
              styles["button"],
              pathname === "/contacts" && styles["bold"]
            )}
            to="/contacts"
          >
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
    <span className={styles["back-text"]}>Назад</span>
  </Link>
);
