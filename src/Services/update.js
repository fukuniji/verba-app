export async function updateWordFromTable(id, word) {
  try {
    const response = await fetch(`/api/words/${id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(word),
    });
    console.log("Server response:", response);
    if (!response.ok) {
      throw new Error(`Failed to update word: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating word:", error);
    throw error;
  }
}
