import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../store/userStore';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import Label from '../../components/atoms/Label';
import { mockBooks } from '../../lib/mockData';

export default function CreateListPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const createList = useUserStore((state) => state.createList);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const listData = {
      name: data.name,
      description: data.description,
      bookIds: data.bookIds || [],
    };
    createList(listData);
    navigate('/profile/my-lists');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create a New List</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg">
        <div>
          <Label htmlFor="name">List Name</Label>
          <Input id="name" type="text" {...register('name', { required: 'List name is required' })} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <textarea
            id="description"
            rows="4"
            className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700"
            {...register('description')}
          ></textarea>
        </div>
        <div>
          <Label>Add Books (Optional)</Label>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto">
            {mockBooks.map(book => (
              <div key={book.id} className="flex items-center">
                <input
                  id={`book-${book.id}`}
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  {...register('bookIds')}
                  value={book.id}
                />
                <label htmlFor={`book-${book.id}`} className="ml-3 text-sm">
                  {book.title}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-4">
          <Button type="submit">Create List</Button>
        </div>
      </form>
    </div>
  );
}
