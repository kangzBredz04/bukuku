"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Hello, Home Page!</h1>

      <div className="flex space-x-4">
        <Link
          href="/dashboard"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          To Dashboard (Menggunakan Link)
        </Link>

        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          To Dashboard (Menggunakan useRouter)
        </button>
      </div>
    </div>
  );
}
