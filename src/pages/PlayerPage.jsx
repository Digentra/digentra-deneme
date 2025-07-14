import { useParams, Link } from 'react-router-dom';
import { mockBooks } from '../lib/mockData';
import Button from '../components/atoms/Button';

// A simple play icon for the button
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function PlayerPage() {
  const { id } = useParams();
  const book = mockBooks.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="max-w-md mx-auto text-center">
      <Link to={`/book/${id}`} className="text-sm text-indigo-600 hover:underline mb-4 inline-block">Back to Details</Link>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <img src={book.coverImage} alt={`Cover of ${book.title}`} className="w-full rounded-lg shadow-md mb-6" />
        <h2 className="text-2xl font-bold">{book.title}</h2>
        <p className="text-lg text-gray-500 mb-8">by {book.author}</p>

        {/* Placeholder for timeline */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
          <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mb-8">
          <span>1:35:20</span>
          <span>3:45:00</span>
        </div>

        <Button className="!w-auto !rounded-full !p-4 mx-auto">
          <PlayIcon />
        </Button>
      </div>
    </div>
  );
}