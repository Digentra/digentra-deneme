import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockBooks } from '../lib/mockData';

// Inlined SVGs
const PlayIcon = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.168v7.664a1 1 0 001.555.832l5.598-3.832a1 1 0 000-1.664l-5.598-3.832z" /></svg>;
const PauseIcon = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v8a1 1 0 001 1h1a1 1 0 001-1V8a1 1 0 00-1-1H8zm5 0a1 1 0 00-1 1v8a1 1 0 001 1h1a1 1 0 001-1V8a1 1 0 00-1-1h-1z" /></svg>;
const BackwardIcon = (props) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M10 18.5a.5.5 0 01-.854.354l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.854.354v12zM18 18.5a.5.5 0 01-.854.354l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.854.354v12z" /></svg>;
const ForwardIcon = (props) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M6 5.5a.5.5 0 01.854-.354l6 6a.5.5 0 010 .708l-6 6A.5.5 0 016 17.5v-12zm8 0a.5.5 0 01.854-.354l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.854-.354v-12z" /></svg>;
const MoonIcon = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>;
const ListIcon = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>;

export default function PlayerPage() {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(45);
  const timelineRef = useRef(null);
  const isDragging = useRef(false);
  const book = mockBooks.find((b) => b.id === parseInt(id));

  const handleProgressUpdate = (e) => {
    if (!timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setProgress(newProgress);
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    handleProgressUpdate(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      handleProgressUpdate(e);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!book) {
    return <div>Book not found!</div>;
  }

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
          <div 
            ref={timelineRef}
            className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 cursor-pointer relative" 
            onMouseDown={handleMouseDown}
          >
            <div className="bg-primary h-2 rounded-full" style={{ width: `${progress}%` }}></div>
            <div 
              className="absolute w-4 h-4 bg-primary rounded-full -translate-y-1/2 top-1/2"
              style={{ left: `calc(${progress}% - 8px)` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs font-body text-text-muted-light dark:text-text-muted-dark mt-2">
            <span>1:35:20</span>
            <span>3:45:00</span>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-10">
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

        <div className="flex items-center justify-around mt-8 text-text-muted-light dark:text-text-muted-dark">
            <button className="hover:text-primary transition-colors flex flex-col items-center">
                <MoonIcon className="w-6 h-6"/>
                <span className="text-xs mt-1">Sleep Timer</span>
            </button>
            <button className="hover:text-primary transition-colors flex flex-col items-center">
                <ListIcon className="w-6 h-6"/>
                <span className="text-xs mt-1">Chapters</span>
            </button>
        </div>
      </div>
    </div>
  );
}