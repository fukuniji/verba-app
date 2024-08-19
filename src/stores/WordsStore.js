import { makeAutoObservable } from "mobx";
import { getWords } from "../Services/getWords";

class WordsStore {
  words = [];
  isLoaded = false;

  constructor() {
    makeAutoObservable(this);
  }

  getData = async () => {
    if (this.isLoaded) {
      return;
    }
    const data = await getWords();
    this.setWords(data);
    console.log("Data from the server:", data);
  };

  setWords(data) {
    this.words = data;
    this.isLoaded = true;
  }
}

export default new WordsStore();
