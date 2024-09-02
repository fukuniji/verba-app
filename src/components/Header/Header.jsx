import style from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <header className={style.container}>
        {/* <img src="" alt="logo" /> */}
        <nav className={style.menu}>
          <a href="#">Карточки</a>
          <a href="#addSection">Добавить слово</a>
          <a href="#">Список слов</a>
        </nav>
      </header>
    </>
  );
}
