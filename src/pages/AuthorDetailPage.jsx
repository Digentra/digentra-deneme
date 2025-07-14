import { useParams } from 'react-router-dom';
import { mockBooks } from '../lib/mockData';
import BookList from '../components/organisms/BookList';
import { useMemo } from 'react';

export default function AuthorDetailPage() {
  const { authorName } = useParams();
  
  const authorBooks = useMemo(() => {
    return mockBooks.filter(
      (book) => book.author.toLowerCase() === authorName.toLowerCase()
    );
  }, [authorName]);

  const authorDetails = useMemo(() => {
    return authorBooks.length > 0 ? authorBooks[0] : null;
  }, [authorBooks]);

  return (
    <div className="container mx-auto px-6 py-8">
      {authorDetails && (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <img 
            src={authorDetails.authorImage} 
            alt={authorDetails.author} 
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold font-heading text-primary-dark dark:text-white">
              {authorDetails.author}
            </h1>
            <p className="text-lg text-text-muted-light dark:text-text-muted-dark mt-4 max-w-2xl">
              {authorDetails.authorBio}
            </p>
          </div>
        </div>
      )}
      
      <h2 className="text-3xl font-bold mb-6">Books by {authorName}</h2>
      
      {authorBooks.length > 0 ? (
        <BookList books={authorBooks} />
      ) : (
        <p>No books found for this author.</p>
      )}
    </div>
  );
}
