import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  // Guard clause to prevent rendering if book is undefined
  if (!book) {
    return null; 
  }

  return (
    <Link to={`/book/${book.id}`} className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={book.coverImage}
          alt={`Cover of ${book.title}`}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700 dark:text-gray-200">{book.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">{book.author}</p>
    </Link>
  );
}
