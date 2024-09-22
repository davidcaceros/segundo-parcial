const API_URL = "https://api.vercel.app/blog";

export const findBookById = async () => {
  try {
    const response = await fetch(`${API_URL}?{id}`);
    if (!response.ok) {
      throw new Error("Error de red");
    }
    const book = await response.json();
    return book;
  } catch (error) {
    console.error("Error obteniendo la data:", error);
    return null;
  }
};
