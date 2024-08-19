import wordsStore from "./WordsStore"; // Импортируем экземпляр класса

class RootStore {
  constructor() {
    this.wordsStore = wordsStore; // Используем импортированный экземпляр
  }
}

export default new RootStore(); // Экспортируем экземпляр RootStore
