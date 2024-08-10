// components/LoadingSkeleton.tsx
export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-24 h-24 bg-gray-300 animate-pulse rounded-full mb-4"></div>
      <div className="w-48 h-6 bg-gray-300 animate-pulse rounded"></div>
    </div>
  );
}
