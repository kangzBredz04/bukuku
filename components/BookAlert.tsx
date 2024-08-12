interface BookAlertProps {
  book: {
    id: number;
    title: string;
    author: string;
    genre: string;
    publishedYear: number;
    price: number;
  };
  onClose: () => void;
}

export default function BookAlert({ book, onClose }: BookAlertProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">{book.title}</h2>
        <p className="text-gray-700 mb-2">Author: {book.author}</p>
        <p className="text-gray-700 mb-2">Genre: {book.genre}</p>
        <p className="text-gray-700 mb-2">Published: {book.publishedYear}</p>
        <p className="text-blue-600 font-bold mb-4">
          Price: Rp{book.price.toLocaleString()}
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
