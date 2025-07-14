import { useForm } from 'react-hook-form';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import Label from '../components/atoms/Label';

export default function LoginSecurityPage() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const newPassword = watch('newPassword');

  const onSubmit = (data) => {
    // In a real app, you'd call an API to change the password
    console.log(data);
    alert('Password updated successfully!');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Login & Security</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg">
        <div>
          <Label htmlFor="currentPassword">Current Password</Label>
          <Input id="currentPassword" type="password" {...register('currentPassword', { required: 'Current password is required' })} />
          {errors.currentPassword && <p className="text-red-500 text-xs mt-1">{errors.currentPassword.message}</p>}
        </div>
        <div>
          <Label htmlFor="newPassword">New Password</Label>
          <Input id="newPassword" type="password" {...register('newPassword', { required: 'New password is required', minLength: { value: 8, message: 'Password must be at least 8 characters' } })} />
          {errors.newPassword && <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>}
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirm New Password</Label>
          <Input id="confirmPassword" type="password" {...register('confirmPassword', { required: 'Please confirm your new password', validate: value => value === newPassword || 'The passwords do not match' })} />
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
        </div>
        <div className="pt-4">
          <Button type="submit">Change Password</Button>
        </div>
      </form>
    </div>
  );
}
