import style from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={style.loader_wrapper}>
      <div className={style.loader_indicator}></div>
    </div>
  );
}
