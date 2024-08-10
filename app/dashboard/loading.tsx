// components/LoadingSkeleton.tsx

export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Menampilkan beberapa skeleton card buku */}
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 p-6 rounded-lg shadow-md animate-pulse"
        >
          <div className="h-6 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
}
