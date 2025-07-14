import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import Label from '../components/atoms/Label';
import authService from '../services/authService';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [serverMessage, setServerMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setServerMessage('');
    // Mocking the service call for now
    // const response = await authService.forgotPassword(data.email);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    const response = { success: true, message: 'If an account with that email exists, a password reset link has been sent.' };
    setIsLoading(false);

    if (response.success) {
      setIsSuccess(true);
      setServerMessage(response.message);
    } else {
      setIsSuccess(false);
      setServerMessage(response.message);
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            Forgot your password?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>
        {serverMessage ? (
          <div className={`text-center p-4 rounded-md ${isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {serverMessage}
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? 'Sending...' : 'Send reset link'}
              </Button>
            </div>
          </form>
        )}
        <div className="text-sm text-center">
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
