import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import style from "./Header.module.scss";

export default function Header() {
  return (
    <header className={style.container}>
      <Link to="/">
        <div className={style.logo}>
          <img className={style.logo_img} src={logo} alt="logo" />
        </div>
      </Link>

      <h2>Verba</h2>

      <nav className={style.menu}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.navlink} ${style.active}` : style.navlink
          }
          to="/"
        >
          На главную
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.navlink} ${style.active}` : style.navlink
          }
          to="/cards"
        >
          Карточки
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.navlink} ${style.active}` : style.navlink
          }
          to="/words"
        >
          Список слов
        </NavLink>
      </nav>
    </header>
  );
}
