export async function getWords() {
  try {
    const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
