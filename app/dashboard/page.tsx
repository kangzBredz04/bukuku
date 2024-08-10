"use client";

import SkeletonCard from "@/components/SkeletonCard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Definisikan tipe data untuk buku
interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  genre: string;
  publishedYear: number;
}

export default function Page() {
  const router = useRouter();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data buku dari API
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/books");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Dashboard Page
        </h1>
        <div className="flex justify-center space-x-4">
          <Link
            href="/"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            To Home (Menggunakan Link)
          </Link>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
          >
            To Home (Menggunakan useRouter)
          </button>
        </div>
      </header>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                {book.title}
              </h2>
              <p className="text-gray-700 mb-1">Author: {book.author}</p>
              <p className="text-gray-700 mb-1">Genre: {book.genre}</p>
              <p className="text-gray-700 mb-2">
                Published: {book.publishedYear}
              </p>
              <p className="text-blue-600 font-bold">
                Price: Rp{book.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
