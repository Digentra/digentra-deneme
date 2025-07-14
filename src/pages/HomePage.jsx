import BookList from '../components/organisms/BookList';
import Hero from '../components/organisms/Hero';
import { mockBooks } from '../lib/mockData';

export default function HomePage() {
  // Simple logic to divide books into different lists
  const editorsPicks = mockBooks.slice(0, 4);
  const popularBooks = mockBooks.slice(4, 10);

  return (
    <>
      <Hero />
      <div className="container mx-auto px-6 py-8">
        <BookList title="Editor's Picks" books={editorsPicks} />
        <BookList title="Popular on Digentra" books={popularBooks} />
      </div>
    </>
  );
}