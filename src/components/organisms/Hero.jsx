import { Link } from 'react-router-dom';
import { mockBooks } from '../../lib/mockData';
import Button from '../atoms/Button';

export default function Hero() {
  const heroBooks = mockBooks.slice(0, 5);

  return (
    <div className="bg-light dark:bg-dark py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content & CTA */}
          <div className="text-center md:text-left">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-dark dark:text-white leading-tight">
              Binlerce Kitap.
              <br />
              <span className="text-primary">8 Dil.</span> Tek Abonelik.
            </h1>
            <p className="mt-6 font-body text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark max-w-xl mx-auto md:mx-0">
              Sevdiğin hikayeleri, ana dilinde veya yeni bir dilde keşfet. Sınırları kaldıran kütüphaneye adım at.
            </p>
            <div className="mt-8">
              <Link to="/library">
                <Button variant="primary" className="text-xl px-8 py-4">
                  Kütüphaneyi Keşfet
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Book Collage */}
          <div className="hidden md:block relative w-full h-96">
            {heroBooks.map((book, index) => {
              const styles = [
                { transform: 'rotate(-10deg) scale(0.9)', zIndex: 1, top: '10%', left: '5%' },
                { transform: 'rotate(5deg) scale(1)', zIndex: 3, top: '0%', left: '30%' },
                { transform: 'rotate(15deg) scale(0.95)', zIndex: 2, top: '25%', left: '60%' },
                { transform: 'rotate(-5deg) scale(0.85)', zIndex: 2, top: '45%', left: '15%' },
                { transform: 'rotate(8deg) scale(0.9)', zIndex: 1, top: '50%', left: '45%' },
              ];
              return (
                <div
                  key={book.id}
                  className="absolute w-48 h-64 transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10"
                  style={styles[index]}
                >
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
