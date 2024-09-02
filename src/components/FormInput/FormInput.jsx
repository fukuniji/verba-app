import style from "./FormInput.module.scss";

export default function FormInput({
  name,
  placeholder,
  value,
  error,
  onChange,
}) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${style.input} ${error ? style.error : ""}`}
    />
  );
}
