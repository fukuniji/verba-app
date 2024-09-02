import style from "./FormAddWord.module.scss";
import FormInput from "../FormInput/FormInput";
import { useState, useEffect } from "react";

export default function FormAddWord() {
  const [formData, setFormData] = useState({
    word: "",
    transl: "",
    transc: "",
    theme: "",
  });

  const [errors, setErrors] = useState({
    word: false,
    transl: false,
    transc: false,
    theme: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const reWord = /^[a-zA-Z ]{1,50}$/;
  const reTransl = /^[а-яА-ЯёЁ ]{1,50}$/;
  const reTransc =
    /^\[[a-zA-Zɪʊʌɛɒːˈˌˈˌːʃʒʧʤɹʊˈˌˈˌː]+( [a-zA-Zɪʊʌɛɒːˈˌˈˌː]+)*\]$/;
  const reTheme = /^[а-яА-ЯёЁ]{1,25}$/;

  const validateField = (name, value) => {
    let regex;

    switch (name) {
      case "word":
        regex = reWord;
        break;
      case "transl":
        regex = reTransl;
        break;
      case "transc":
        regex = reTransc;
        break;
      case "theme":
        regex = reTheme;
        break;
      default:
        return false;
    }

    return value !== "" && regex.test(value);
  };

  useEffect(() => {
    setIsFormValid(
      Object.values(formData).every((value) => value.trim() !== "") &&
        Object.values(errors).every((error) => !error)
    );
  }, [formData, errors]);

  const checkFormValidity = (data) => {
    return Object.values(data).every((value) => value.trim() !== "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isValid = validateField(name, value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !isValid,
    }));

    setIsFormValid(Object.values(errors).every((error) => !error) && isValid);
  };

  const saveWord = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ word: "", transl: "", transc: "", theme: "" });
    setErrors({ word: false, transl: false, transc: false, theme: false });
    setIsFormValid(false);
  };

  const clearForm = () => {
    setFormData({ word: "", transl: "", transc: "", theme: "" });
    setErrors({
      word: false,
      transl: false,
      transc: false,
      theme: false,
    });
    setIsFormValid(false);
  };

  return (
    <div className={style.container}>
      <h2 id="addSection">Добавление нового слова</h2>
      <form className={style.word_adding} onSubmit={saveWord}>
        <FormInput
          name="word"
          placeholder="Слово"
          value={formData.word}
          error={errors.word}
          onChange={handleChange}
        />
        <FormInput
          name="transl"
          placeholder="Перевод"
          value={formData.transl}
          error={errors.transl}
          onChange={handleChange}
        />
        <FormInput
          name="transc"
          placeholder="Транскрипция"
          value={formData.transc}
          error={errors.transc}
          onChange={handleChange}
        />
        <FormInput
          name="theme"
          placeholder="Тема"
          value={formData.theme}
          error={errors.theme}
          onChange={handleChange}
        />
        <div className={style.add_word_btn}>
          <button
            type="submit"
            className={`${style.button_save} ${style.button} ${
              !isFormValid ? style.button_inactive : ""
            }`}
            disabled={!isFormValid}
          >
            Добавить
          </button>
          <button
            type="reset"
            className={`${style.button_cancel} ${style.button}`}
            onClick={clearForm}
          >
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
}
