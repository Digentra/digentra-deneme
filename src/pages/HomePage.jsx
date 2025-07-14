import BookList from '../components/organisms/BookList';
import { mockBooks } from '../lib/mockData';
import useUserStore from '../store/userStore';

export default function HomePage() {
  const { isAuthenticated, user } = useUserStore();

  // Simple logic to divide books into different lists
  const editorsPicks = mockBooks.slice(0, 4);
  const popularBooks = mockBooks.slice(4, 8);

  return (
    <div>
      {isAuthenticated && (
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome back, {user?.name}!
        </h1>
      )}
      <BookList title="Editor's Picks" books={editorsPicks} />
      <BookList title="Popular on Digentra" books={popularBooks} />
    </div>
  );
}