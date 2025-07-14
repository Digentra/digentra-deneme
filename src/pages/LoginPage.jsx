import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import Label from '../components/atoms/Label';
import authService from '../services/authService';
import useUserStore from '../store/userStore';
import { useState } from 'react';

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();
  const [serverError, setServerError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setServerError('');
    const response = await authService.login(data.email, data.password);
    setIsLoading(false);

    if (response.success) {
      login(response.user, response.token);
      navigate('/');
    } else {
      setServerError(response.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {serverError && <p className="text-red-500 text-center text-sm">{serverError}</p>}
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
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </div>
        </form>
        <div className="text-sm text-center">
          <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
