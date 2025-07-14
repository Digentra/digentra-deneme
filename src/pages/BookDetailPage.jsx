import { useParams, Link } from 'react-router-dom';
import { mockBooks } from '../lib/mockData';
import Button from '../components/atoms/Button';
import LanguageFormatSelector from '../components/molecules/LanguageFormatSelector';
import useUserStore from '../store/userStore';

const StarIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function BookDetailPage() {
  const { id } = useParams();
  const book = mockBooks.find((b) => b.id === parseInt(id));

  const { isAuthenticated, library, toggleBookInLibrary } = useUserStore();
  const isBookInLibrary = book ? library.includes(book.id) : false;

  const handleToggleLibrary = () => {
    if (book) {
      toggleBookInLibrary(book.id);
    }
  };

  if (!book) {
    return (
      <div className="text-center py-20">
        <h2 className="font-heading text-2xl">Book not found!</h2>
        <Link to="/"><Button className="mt-4">Go Home</Button></Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Cover Image & Library Button */}
        <div className="md:col-span-4 lg:col-span-3">
          <div className="sticky top-28">
            <img src={book.coverImage} alt={`Cover of ${book.title}`} className="w-full rounded-lg shadow-2xl aspect-w-3 aspect-h-4 object-cover" />
            {isAuthenticated && (
              <Button
                onClick={handleToggleLibrary}
                className="w-full mt-6 text-lg"
                variant={isBookInLibrary ? 'secondary' : 'primary'}
              >
                {isBookInLibrary ? '✓ In Your Library' : '+ Add to Library'}
              </Button>
            )}
          </div>
        </div>

        {/* Right Column: Book Details */}
        <div className="md:col-span-8 lg:col-span-9">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white">{book.title}</h1>
          <p className="font-body text-xl text-text-muted-light dark:text-text-muted-dark mt-2">by {book.author}</p>
          
          <div className="flex items-center my-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className={`w-6 h-6 ${i < Math.round(book.rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} />
            ))}
            <span className="ml-2 font-body text-text-muted-light dark:text-text-muted-dark">{book.rating} stars</span>
          </div>

          <div className="my-8">
            <LanguageFormatSelector />
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to={`/read/${id}`} className="flex-1">
              <Button className="w-full text-xl py-4" variant="primary">Read Now</Button>
            </Link>
            <Link to={`/listen/${id}`} className="flex-1">
              <Button className="w-full text-xl py-4" variant="ghost">Listen Now</Button>
            </Link>
          </div>
          
          <div className="mt-12">
            <h2 className="font-heading text-2xl font-bold border-b border-border-light dark:border-border-dark pb-2 mb-4">Summary</h2>
            <p className="font-body text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              This is a placeholder for the book summary. In a real application, this would be a compelling synopsis of "{book.title}". It would draw the reader in, hinting at the plot and themes without giving too much away. The language would be evocative and aligned with the book's genre.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}