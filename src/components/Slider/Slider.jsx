import style from "./Slider.module.scss";
import back from "../../assets/back.svg";
import forward from "../../assets/forward.svg";

export default function Slider({ children }) {
  return (
    <>
      <div className={style.slider_wrapper}>
        <button className={style.slider_btn}>
          <img
            className={style.slider_arrow}
            src={back}
            alt="back"
            title="Назад"
          />
        </button>
        {children}
        <button className={style.slider_btn}>
          <img
            className={style.slider_arrow}
            src={forward}
            alt="forward"
            title="Вперед"
          />
        </button>
      </div>
    </>
  );
}
