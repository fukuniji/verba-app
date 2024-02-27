import { NavLink } from "react-router-dom";

import style from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <header className={style.container}>
        <h1 className={style.header_title}>Verba</h1>
        <nav className={style.header_nav_container}>
          <NavLink className={style.navlink} to="/">
            На главную
          </NavLink>
          <NavLink className={style.navlink} to="/cards">
            Карточки
          </NavLink>
          <NavLink className={style.navlink} to="/words">
            Список слов
          </NavLink>
        </nav>
      </header>
    </>
  );
}
