import BookCard from '../molecules/BookCard';

export default function BookList({ title, books }) {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h2>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
