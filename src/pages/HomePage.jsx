import BookCarousel from '../components/organisms/BookCarousel';
import Hero from '../components/organisms/Hero';
import { mockBooks } from '../lib/mockData';

export default function HomePage() {
  // Ensure distinct and non-overlapping lists
  const editorsPicks = mockBooks.slice(0, 8);
  const popularBooks = mockBooks.slice(8, 16);

  return (
    <>
      <Hero />
      <div className="container mx-auto px-6 py-8">
        <BookCarousel title="Editor's Picks" books={editorsPicks} />
        <BookCarousel title="Popular on Digentra" books={popularBooks} />
      </div>
    </>
  );
}