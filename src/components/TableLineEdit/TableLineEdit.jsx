import style from "./TableLineEdit.module.scss";
import FormInput from "../FormInput/FormInput";
import { useState, useEffect } from "react";

export default function TableLineEdit(props) {
  const {
    word: initialWord,
    transl: initialTransl,
    transc: initialTransc,
    theme: initialTheme,
    setWord: setParentWord,
    setTransl: setParentTransl,
    setTransc: setParentTransc,
    setTheme: setParentTheme,
    setEditing,
    cancelEdit,
  } = props;

  const [formData, setFormData] = useState({
    word: initialWord,
    transl: initialTransl,
    transc: initialTransc,
    theme: initialTheme,
  });

  const [errors, setErrors] = useState({
    word: false,
    transl: false,
    transc: false,
    theme: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // useEffect(() => {
  //   const hasErrors = Object.values(errors).some((error) => error);
  //   const saveButton = document.querySelector(`.${style.button_save}`);
  //   if (saveButton) saveButton.disabled = hasErrors;
  // }, [errors]);

  const checkFormValidity = (data) => {
    return Object.values(data).every((value) => value.trim() !== "");
  };

  // const validateField = (field, value) => {
  //   setErrors((prevErrors) => ({
  //     ...prevErrors,
  //     [field]: value.trim() === "",
  //   }));
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(newFormData);
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
    // validateField(name, value);
    setIsFormValid(checkFormValidity(newFormData));
  };

  const saveLine = (e) => {
    e.preventDefault();
    console.log(formData);
    setParentWord(formData.word);
    setParentTransl(formData.transl);
    setParentTransc(formData.transc);
    setParentTheme(formData.theme);
    setEditing(false);
    setIsFormValid(false);
  };

  return (
    <>
      {" "}
      <form className={style.line_editing} onSubmit={saveLine}>
        <FormInput
          name="word"
          value={formData.word}
          error={errors.word}
          onChange={handleChange}
        />
        <FormInput
          name="transl"
          value={formData.transl}
          error={errors.transl}
          onChange={handleChange}
        />
        <FormInput
          name="transc"
          value={formData.transc}
          error={errors.transc}
          onChange={handleChange}
        />
        <FormInput
          name="theme"
          value={formData.theme}
          error={errors.theme}
          onChange={handleChange}
        />
        <div className={style.edit_cell}>
          <button
            type="submit"
            onClick={saveLine}
            className={`${style.button_save} ${style.button} ${
              !isFormValid ? style.button_inactive : ""
            }`}
            disabled={!isFormValid}
          >
            Сохранить
          </button>
          <button
            onClick={cancelEdit}
            className={`${style.button_cancel} ${style.button}`}
          >
            Отменить
          </button>
        </div>
      </form>
    </>
  );
}
