import cat from "../../assets/404_error_cat.jpg";
import style from "./ErrorPage.module.scss";

export default function ErrorPage() {
  return (
    <section className={style.error404_section}>
      <img className={style.error_img} src={cat} alt="cat" title="Meow!" />
      <div>
        <div>
          <h3>Ой, кажется, мы заблудились! 🐾</h3>
          <div>
            <p>Наш пушистый друг не смог найти нужную страничку. 😿 </p>
            <p>Возможно, ты ввел неверный адрес или ссылка устарела. </p>
            <p>
              Попробуй вернуться на главную страницу или введи нужный адрес
              заново. 😊
            </p>
            <p>
              P.S. А пока, посмотри на нашего милого котика! Он всегда рад новым
              друзьям! 🥰
            </p>
          </div>
        </div>
        <div>
          <h3>Oops, we seem to be lost! 🐾</h3>
          <div>
            <p>Our fluffy friend couldn't find the right page. 😿 </p>
            <p>Maybe you entered the wrong address or the link is outdated. </p>
            <p>
              Try going back to the homepage or entering the correct address
              again. 😊
            </p>
            <p>
              P.S. In the meantime, check out our adorable cat! He's always
              happy to meet new friends! 🥰
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
