import { useState } from "react";
import BookAlert from "./BookAlert";

interface BookCardProps {
  book: {
    id: number;
    title: string;
    author: string;
    genre: string;
    publishedYear: number;
    price: number;
  };
}

export default function BookCard({ book }: BookCardProps) {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">
          {book.title}
        </h2>
        <p className="text-gray-700 mb-1">Author: {book.author}</p>
        <p className="text-gray-700 mb-1">Genre: {book.genre}</p>
        <p className="text-gray-700 mb-2">Published: {book.publishedYear}</p>
        <p className="text-blue-600 font-bold">
          Price: Rp{book.price.toLocaleString()}
        </p>
        <button
          onClick={handleShowAlert}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Detail
        </button>
      </div>
      {showAlert && <BookAlert book={book} onClose={handleCloseAlert} />}
    </>
  );
}
