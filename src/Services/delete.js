export async function deleteWordById(id) {
  try {
    const response = await fetch(`/api/words/${id}/delete`, {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error(`Failed to delete word: ${response.statusText}`);
    }
    console.log("Server response", response);
    return await response.json();
  } catch (error) {
    console.error("Error deleting word:", error);
    throw error;
  }
}
