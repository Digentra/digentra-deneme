import useUserStore from '../store/userStore';
import { mockBooks } from '../lib/mockData';
import BookList from '../components/organisms/BookList';
import { Link } from 'react-router-dom';

export default function LibraryPage() {
  const { library } = useUserStore();
  const libraryBooks = mockBooks.filter(book => library.includes(book.id));

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">My Library</h1>
      {libraryBooks.length > 0 ? (
        <BookList title="My Saved Books" books={libraryBooks} />
      ) : (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold">Your library is empty.</h2>
          <p className="text-gray-500 mt-2">Books you add will appear here.</p>
          <Link
            to="/"
            className="mt-6 inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
          >
            Discover Books
          </Link>
        </div>
      )}
    </div>
  );
}