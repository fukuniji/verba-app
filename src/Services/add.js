export async function addNewWord(word) {
  try {
    const response = await fetch(`/api/words/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(word),
    });
    if (!response.ok) {
      throw new Error(`Failed to add word: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding word:", error);
    throw error;
  }
}
