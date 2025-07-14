import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  if (!book) {
    return null;
  }

  return (
    <Link to={`/book/${book.id}`} className="group block">
      <div className="overflow-hidden rounded-2xl bg-light dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="aspect-w-3 aspect-h-4">
          <img
            src={book.coverImage}
            alt={`Cover of ${book.title}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-heading font-bold text-lg text-text-light dark:text-text-dark truncate group-hover:text-primary transition-colors duration-300">
            {book.title}
          </h3>
          <p className="font-body text-sm text-text-muted-light dark:text-text-muted-dark mt-1">
            {book.author}
          </p>
        </div>
      </div>
    </Link>
  );
}
