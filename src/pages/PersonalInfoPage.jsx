import { useForm } from 'react-hook-form';
import useUserStore from '../store/userStore';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import Label from '../components/atoms/Label';
import toast from 'react-hot-toast';

export default function PersonalInfoPage() {
  const { user, setUser } = useUserStore();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
    }
  });

  const onSubmit = (data) => {
    // In a real app, you'd call an API to update the user info
    setUser({ ...user, ...data });
    toast.success('Profile updated successfully!');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Personal Info</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" {...register('name', { required: 'Name is required' })} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" {...register('email', { required: 'Email is required' })} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div className="pt-4">
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  );
}
