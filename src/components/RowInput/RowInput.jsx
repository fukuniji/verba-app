import { useEffect, useState } from "react";
import style from "./RowInput.module.scss";

export default function RowInput({ word, setStatusEdit }) {
  const [english, setEnglish] = useState("");
  const [transcription, setTranscription] = useState("");
  const [russian, setRussian] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    setEnglish(word.english);
    setTranscription(word.transcription);
    setRussian(word.russian);
    setTags(word.tags);
  }, [word]);

  return (
    <>
      <div className={style.row}>
        <input
          type="text"
          value={english}
          onChange={(event) => setEnglish(event.target.value)}
        ></input>
        <input
          type="text"
          value={transcription}
          onChange={(event) => setTranscription(event.target.value)}
        ></input>
        <input
          type="text"
          value={russian}
          onChange={(event) => setRussian(event.target.value)}
        ></input>
        <input
          type="text"
          value={tags}
          onChange={(event) => setTags(event.target.value)}
        ></input>

        <button>Save</button>
        <button onClick={() => setStatusEdit(true)}>Cancel</button>
      </div>
    </>
  );
}
