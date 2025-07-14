import { useState, useMemo } from 'react';
import BookCarousel from '../components/organisms/BookCarousel';
import Hero from '../components/organisms/Hero';
import { mockBooks, mockGenres } from '../lib/mockData';
import Button from '../components/atoms/Button';

export default function HomePage() {
  const [selectedGenre, setSelectedGenre] = useState('All');

  const filteredBooks = useMemo(() => {
    if (selectedGenre === 'All') {
      return mockBooks;
    }
    return mockBooks.filter((book) => book.genre === selectedGenre);
  }, [selectedGenre]);

  const editorsPicks = filteredBooks.slice(0, 8);
  const popularBooks = filteredBooks.slice(8, 16);

  return (
    <>
      <Hero />
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-2">
            <Button 
              onClick={() => setSelectedGenre('All')}
              className={selectedGenre === 'All' ? 'bg-primary text-white' : ''}
            >
              All
            </Button>
            {mockGenres.map((genre) => (
              <Button 
                key={genre} 
                onClick={() => setSelectedGenre(genre)}
                className={selectedGenre === genre ? 'bg-primary text-white' : ''}
              >
                {genre}
              </Button>
            ))}
          </div>
        </div>
        <BookCarousel title="Editor's Picks" books={editorsPicks} />
        <BookCarousel title="Popular on Digentra" books={popularBooks} />
      </div>
    </>
  );
}