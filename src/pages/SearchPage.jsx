import { useSearchParams } from 'react-router-dom';
import { mockBooks } from '../lib/mockData';
import BookList from '../components/organisms/BookList';
import { useMemo } from 'react';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  const filteredBooks = useMemo(() => {
    if (!query) {
      return [];
    }
    return mockBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Search Results for "{query}"
      </h1>
      {filteredBooks.length > 0 ? (
        <BookList books={filteredBooks} />
      ) : (
        <p>No books found matching your search.</p>
      )}
    </div>
  );
}
