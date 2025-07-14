import { useParams, Link } from 'react-router-dom';
import { mockBooks } from '../lib/mockData';

export default function ReaderPage() {
  const { id } = useParams();
  const book = mockBooks.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="bg-light dark:bg-dark min-h-screen flex flex-col">
      {/* Reader Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm p-4 flex justify-between items-center">
        <div>
          <Link to={`/book/${id}`} className="font-body text-primary hover:underline">
            &larr; Back to Details
          </Link>
          <h1 className="font-heading text-xl font-bold text-text-light dark:text-text-dark mt-1">{book.title}</h1>
        </div>
        <div>
          {/* Placeholder for settings like font size, background color etc. */}
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 sm:px-12 lg:px-24 py-8">
        <div className="max-w-3xl mx-auto font-body text-xl text-text-light dark:text-gray-300 leading-loose">
          <h2 className="font-heading text-3xl font-bold mb-6">Chapter 1: The Beginning</h2>
          <p>
            This is a placeholder for the actual book content. In a real implementation, this area would be populated with the text of the book, paginated or scrollable. The user would be able to adjust font sizes, margins, and background colors.
          </p>
          <br />
          <p>
            For now, imagine you are engrossed in the compelling narrative of "{book.title}", following the characters on their journey. The text flows seamlessly, and the interface is unobtrusive, allowing you to fully immerse yourself in the story. The line height is generous, and the text column is not too wide, which prevents eye strain during long reading sessions, a principle inspired by the best e-reader applications.
          </p>
        </div>
      </main>

       {/* Reader Footer */}
       <footer className="bg-white dark:bg-gray-800 shadow-inner p-4 flex justify-center items-center space-x-8">
          <button className="font-body text-primary hover:underline">Previous</button>
          <span className="font-body text-sm text-text-muted-light dark:text-text-muted-dark">Page 1 of 352</span>
          <button className="font-body text-primary hover:underline">Next</button>
       </footer>
    </div>
  );
}