import { useState } from "react";
import RowInput from "../RowInput/RowInput";
import style from "./Row.module.scss";

export default function Row({ word }) {
  const [statusEdit, setStatusEdit] = useState(true);

  return (
    <>
      {statusEdit ? (
        <div key={word.id} className={style.row}>
          <span>{word.english}</span>
          <span>{word.transcription}</span>
          <span>{word.russian}</span>
          <span>{word.tags}</span>
          <button onClick={() => setStatusEdit(false)}>Edit</button>
        </div>
      ) : (
        <RowInput word={word} setStatusEdit={setStatusEdit} />
      )}
    </>
  );
}
