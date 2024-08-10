// components/SkeletonCard.tsx

export default function SkeletonCard() {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg animate-pulse">
      <div className="h-6 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded"></div>
    </div>
  );
}
