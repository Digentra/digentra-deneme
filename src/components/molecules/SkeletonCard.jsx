export default function SkeletonCard() {
  return (
    <div className="group block">
      <div className="overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800 animate-pulse">
        <div className="aspect-w-3 aspect-h-4 bg-gray-300 dark:bg-gray-700"></div>
        <div className="p-4">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="mt-2 h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
