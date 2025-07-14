import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockBooks } from '../lib/mockData';

// Inlined SVGs to remove external dependencies and fix build errors.
const PlayIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.168v7.664a1 1 0 001.555.832l5.598-3.832a1 1 0 000-1.664l-5.598-3.832z" /></svg>
);
const PauseIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v8a1 1 0 001 1h1a1 1 0 001-1V8a1 1 0 00-1-1H8zm5 0a1 1 0 00-1 1v8a1 1 0 001 1h1a1 1 0 001-1V8a1 1 0 00-1-1h-1z" /></svg>
);
const BackwardIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M10 18.5a.5.5 0 01-.854.354l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.854.354v12zM18 18.5a.5.5 0 01-.854.354l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.854.354v12z" /></svg>
);
const ForwardIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M6 5.5a.5.5 0 01.854-.354l6 6a.5.5 0 010 .708l-6 6A.5.5 0 016 17.5v-12zm8 0a.5.5 0 01.854-.354l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.854-.354v-12z" /></svg>
);

export default function PlayerPage() {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(45); // Percentage
  const book = mockBooks.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found!</div>;
  }

  const handleTimelineClick = (e) => {
    const timeline = e.currentTarget;
    const rect = timeline.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = (clickX / rect.width) * 100;
    setProgress(newProgress);
  };

  return (
    <div className="min-h-screen bg-light dark:bg-dark flex flex-col items-center justify-center p-4">
       <Link to={`/book/${id}`} className="absolute top-6 left-6 font-body text-primary hover:underline z-10">
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
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 cursor-pointer" onClick={handleTimelineClick}>
            <div className="bg-primary h-2 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="flex justify-between text-xs font-body text-text-muted-light dark:text-text-muted-dark mt-2">
            <span>1:35:20</span>
            <span>3:45:00</span>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-12">
          <button className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">
            <BackwardIcon className="w-10 h-10" />
          </button>
          
          <button onClick={() => setIsPlaying(!isPlaying)} className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white shadow-lg transform hover:scale-110 transition-transform">
            {isPlaying ? <PauseIcon className="w-12 h-12" /> : <PlayIcon className="w-12 h-12" />}
          </button>

          <button className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">
            <ForwardIcon className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
}