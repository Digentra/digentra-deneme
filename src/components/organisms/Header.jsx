import { Link, useNavigate } from 'react-router-dom';
import useUserStore from '../../store/userStore';
import Button from '../atoms/Button';

export default function Header() {
  const { isAuthenticated, user, logout } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Digentra
        </Link>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <span className="text-gray-800 dark:text-gray-200">Welcome, {user?.name}!</span>
              <Link to="/library" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">My Library</Link>
              <Button onClick={handleLogout} className="!w-auto !py-1.5 !px-3">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">
                Sign In
              </Link>
              <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}