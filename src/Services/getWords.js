export async function getWords() {
  try {
    const response = await fetch("/api/words");
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
}
