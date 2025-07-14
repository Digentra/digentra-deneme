import { useParams, Link } from 'react-router-dom';
import { mockBooks } from '../lib/mockData';
import Button from '../components/atoms/Button';

export default function ReaderPage() {
  const { id } = useParams();
  const book = mockBooks.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">{book.title}</h1>
        <p className="text-lg text-gray-500">Chapter 1: The Beginning</p>
        <Link to={`/book/${id}`} className="text-sm text-indigo-600 hover:underline">Back to Details</Link>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-lg leading-relaxed">
        <p>
          This is a placeholder for the actual book content. In a real implementation, this area would be populated with the text of the book, paginated or scrollable. The user would be able to adjust font sizes, margins, and background colors.
        </p>
        <br />
        <p>
          For now, imagine you are engrossed in the compelling narrative of "{book.title}", following the characters on their journey. The text flows seamlessly, and the interface is unobtrusive, allowing you to fully immerse yourself in the story.
        </p>
        {/* More placeholder text can be added here */}
      </div>

      <div className="flex justify-between mt-8">
        <Button className="!w-auto">Previous Page</Button>
        <Button className="!w-auto">Next Page</Button>
      </div>
    </div>
  );
}