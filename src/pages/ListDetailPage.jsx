import { useParams } from 'react-router-dom';
import useUserStore from '../store/userStore';
import { mockBooks } from '../lib/mockData';
import BookList from '../components/organisms/BookList';

export default function ListDetailPage() {
  const { listId } = useParams();
  const { myLists } = useUserStore(); // In a real app, you'd fetch this list from a server
  
  const list = myLists.find(l => l.id === parseInt(listId));

  if (!list) {
    return <div className="text-center py-20">List not found.</div>;
  }

  const listBooks = mockBooks.filter(book => list.bookIds.includes(book.id.toString()));

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-heading text-primary-dark dark:text-white">
          {list.name}
        </h1>
        <p className="text-lg text-text-muted-light dark:text-text-muted-dark mt-2">
          {list.description}
        </p>
      </div>
      
      <BookList books={listBooks} />
    </div>
  );
}
