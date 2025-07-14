import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockBooks } from '../lib/mockData';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';

const BackwardIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 20 20"><path d="M8.445 14.832A1 1 0 0010 14.168V5.832a1 1 0 00-1.555-.832L4.482 8.168a1 1 0 000 1.664l3.963 2.999zM11.555 14.832A1 1 0 0013 14.168V5.832a1 1 0 00-1.555-.832l-3.963 2.999a1 1 0 000 1.664l3.963 2.999z"/></svg>
);

const ForwardIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 20 20"><path d="M11.555 5.168A1 1 0 0010 5.832v8.336a1 1 0 001.555.832l3.963-2.999a1 1 0 000-1.664l-3.963-2.999zM8.445 5.168A1 1 0 007 5.832v8.336a1 1 0 001.555.832l3.963-2.999a1 1 0 000-1.664L8.445 5.168z" /></svg>
);

export default function PlayerPage() {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(true);
  const book = mockBooks.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found!</div>;
  }

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
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
          </div>
          <div className="flex justify-between text-xs font-body text-text-muted-light dark:text-text-muted-dark mt-2">
            <span>1:35:20</span>
            <span>3:45:00</span>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-12">
          <button className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">
            <BackwardIcon className="w-8 h-8" />
          </button>
          
          <button onClick={() => setIsPlaying(!isPlaying)} className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white shadow-lg transform hover:scale-110 transition-transform">
            {isPlaying ? <PauseIcon className="w-10 h-10" /> : <PlayIcon className="w-10 h-10" />}
          </button>

          <button className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">
            <ForwardIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}