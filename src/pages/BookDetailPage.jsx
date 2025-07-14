import { useParams, Link } from 'react-router-dom';
import { mockBooks } from '../lib/mockData';
import Button from '../components/atoms/Button';
import LanguageFormatSelector from '../components/molecules/LanguageFormatSelector';
import useUserStore from '../store/userStore';

export default function BookDetailPage() {
  const { id } = useParams();
  const book = mockBooks.find((b) => b.id === parseInt(id));

  const { isAuthenticated, library, toggleBookInLibrary } = useUserStore();
  const isBookInLibrary = library.includes(book?.id);

  const handleToggleLibrary = () => {
    toggleBookInLibrary(book.id);
  };

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Left Column: Cover Image */}
      <div className="md:col-span-1">
        <img src={book.coverImage} alt={`Cover of ${book.title}`} className="w-full rounded-lg shadow-lg" />
        {isAuthenticated && (
          <Button
            onClick={handleToggleLibrary}
            className="w-full mt-4 bg-green-600 hover:bg-green-700"
          >
            {isBookInLibrary ? 'Remove from Library' : 'Add to Library'}
          </Button>
        )}
      </div>

      {/* Right Column: Book Details */}
      <div className="md:col-span-2">
        <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">by {book.author}</p>
        
        <div className="flex items-center mb-6">
          <span className="text-yellow-500">★★★★☆</span>
          <span className="ml-2 text-gray-600 dark:text-gray-400">{book.rating} stars</span>
        </div>

        <p className="text-gray-700 dark:text-gray-200 mb-6">
          This is a placeholder for the book summary. In a real application, this would be a compelling synopsis of "{book.title}".
        </p>

        <div className="mb-6">
          <LanguageFormatSelector />
        </div>

        <div className="flex space-x-4">
          <Link to={`/read/${id}`} className="flex-1">
            <Button className="w-full">Read Now</Button>
          </Link>
          <Link to={`/listen/${id}`} className="flex-1">
            <Button className="w-full bg-gray-700 hover:bg-gray-800">Listen Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}