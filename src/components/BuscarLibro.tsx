import React, { useState } from "react";
import { findBookById } from "../services/api";
import { Book } from "../types/Book";

const BuscarLibro: React.FC = () => {
  const [id, setId] = useState("");
  const [book, setBook] = useState<Book | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resultado = await findBookById();
      if (resultado && resultado.id) {
        setBook(resultado);
        setError(null);
      } else {
        setError("Libro no encontrado");
      }
    } catch (error) {
      console.log(error);
      setError("Error al buscar el libro");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Ingrese el id del libro"
        />
        <button type="submit">Buscar</button>
      </form>

      {book && (
        <div className="book-info">
          <h2>Información del Libro</h2>
          <p>
            <strong>ID:</strong> {book.id}
          </p>
          <p>
            <strong>Title:</strong> {book.title}
          </p>
          <p>
            <strong>Content:</strong> {book.content}
          </p>
          <p>
            <strong>Author:</strong> {book.author}
          </p>
          <p>
            <strong>Date:</strong> {book.date.toString()}
          </p>
          <p>
            <strong>Category:</strong> {book.category}
          </p>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default BuscarLibro;
