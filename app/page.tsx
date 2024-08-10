import Layout from "@/components/Layout";

const books = [
  {
    id: 1,
    title: "Belajar Next.js",
    author: "John Doe",
    releaseDate: "2024-08-01",
  },
  {
    id: 2,
    title: "Tailwind CSS untuk Pemula",
    author: "Jane Smith",
    releaseDate: "2024-07-15",
  },
  {
    id: 3,
    title: "JavaScript Modern",
    author: "Alex Johnson",
    releaseDate: "2024-06-30",
  },
];

export default function Home() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Buku Terbaru</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{book.title}</h3>
            <p className="text-gray-700">Penulis: {book.author}</p>
            <p className="text-gray-500">Tanggal Rilis: {book.releaseDate}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
