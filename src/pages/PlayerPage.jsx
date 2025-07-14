import { useParams, Link } from 'react-router-dom';
import { mockBooks } from '../lib/mockData';
import { PlayIcon, PauseIcon, RewindIcon, FastForwardIcon } from '@heroicons/react/solid'; // Placeholder, needs heroicons installed

export default function PlayerPage() {
  const { id } = useParams();
  const book = mockBooks.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found!</div>;
  }

  // Dummy state for player
  const isPlaying = true;

  return (
    <div className="min-h-screen bg-light dark:bg-dark flex flex-col items-center justify-center p-4">
       <Link to={`/book/${id}`} className="absolute top-6 left-6 font-body text-primary hover:underline">
            &larr; Back to Details
        </Link>
      <div className="w-full max-w-md">
        <div className="aspect-w-1 aspect-h-1 mb-8">
          <img src={book.coverImage} alt={`Cover of ${book.title}`} className="w-full h-full object-cover rounded-2xl shadow-2xl" />
        </div>
        
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-primary-dark dark:text-white">{book.title}</h1>
          <p className="font-body text-lg text-text-muted-light dark:text-text-muted-dark mt-1">{book.author}</p>
        </div>

        <div className="my-8">
          {/* Placeholder for timeline */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
          </div>
          <div className="flex justify-between text-xs font-body text-text-muted-light dark:text-text-muted-dark mt-2">
            <span>1:35:20</span>
            <span>3:45:00</span>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-8">
          <button className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M8.445 14.832A1 1 0 0010 14.168V5.832a1 1 0 00-1.555-.832L4.482 8.168a1 1 0 000 1.664l3.963 2.999zM11.555 14.832A1 1 0 0013 14.168V5.832a1 1 0 00-1.555-.832l-3.963 2.999a1 1 0 000 1.664l3.963 2.999z"/></svg>
          </button>
          
          <button className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white shadow-lg">
            {isPlaying ? <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg> : <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.168v3.664a1 1 0 001.555.832l3.197-1.832a1 1 0 000-1.664L9.555 7.168z" /></svg>}
          </button>

          <button className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M11.555 5.168A1 1 0 0010 5.832v8.336a1 1 0 001.555.832l3.963-2.999a1 1 0 000-1.664l-3.963-2.999zM8.445 5.168A1 1 0 007 5.832v8.336a1 1 0 001.555.832l3.963-2.999a1 1 0 000-1.664L8.445 5.168z" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}