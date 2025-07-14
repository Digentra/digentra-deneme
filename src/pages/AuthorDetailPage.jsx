import { useParams } from 'react-router-dom';
import { mockBooks } from '../lib/mockData';
import BookList from '../components/organisms/BookList';
import { useMemo } from 'react';

export default function AuthorDetailPage() {
  const { authorName } = useParams();
  
  const authorBooks = useMemo(() => {
    return mockBooks.filter(
      (book) => book.author.toLowerCase() === authorName.toLowerCase()
    );
  }, [authorName]);

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-heading text-primary-dark dark:text-white">
          {authorName}
        </h1>
        <p className="text-lg text-text-muted-light dark:text-text-muted-dark mt-2">
          Browse all books by {authorName}.
        </p>
      </div>
      
      {authorBooks.length > 0 ? (
        <BookList books={authorBooks} />
      ) : (
        <p>No books found for this author.</p>
      )}
    </div>
  );
}
