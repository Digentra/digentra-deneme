import { Link } from 'react-router-dom';
import useUserStore from '../../store/userStore';
import Button from '../../components/atoms/Button';

export default function MyListsPage() {
  const { myLists } = useUserStore();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Lists</h1>
        <Link to="/profile/lists/new">
          <Button>Create New List</Button>
        </Link>
      </div>
      {myLists.length > 0 ? (
        <div className="space-y-4">
          {myLists.map(list => (
            <Link key={list.id} to={`/lists/${list.id}`} className="block p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
              <h2 className="font-bold text-xl">{list.name}</h2>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{list.description}</p>
              <p className="text-sm mt-2">{list.bookIds.length} books</p>
            </Link>
          ))}
        </div>
      ) : (
        <p>You haven't created any lists yet.</p>
      )}
    </div>
  );
}
