import { Link, useNavigate } from 'react-router-dom';
import useUserStore from '../../store/userStore';
import ThemeToggle from '../atoms/ThemeToggle';
import Search from '../atoms/Search';

export default function Header() {
  const { isAuthenticated, user, logout } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Library', path: '/library' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-light dark:bg-dark shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold font-heading text-primary-dark dark:text-primary">
          Digentra
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className="font-body font-semibold text-text-light dark:text-text-dark hover:text-primary transition-colors duration-300">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex-1 max-w-lg mx-4">
          <Search />
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <button onClick={() => navigate('/profile')} className="flex items-center space-x-2">
                <span className="font-semibold font-body">Hi, {user?.name}</span>
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
              </button>
              <button
                onClick={handleLogout}
                className="font-body font-semibold px-4 py-2 rounded-full text-sm text-red-600 border border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/login" className="font-body font-semibold px-6 py-2 rounded-full text-primary border border-primary hover:bg-primary hover:text-white transition-all duration-300">
                Login
              </Link>
              <Link to="/register" className="font-body font-semibold px-6 py-2 rounded-full bg-primary text-white hover:bg-opacity-90 transition-all duration-300">
                Sign Up
              </Link>
            </div>
          )}
           {/* Mobile Menu Button */}
           <div className="md:hidden">
              <button>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              </button>
           </div>
        </div>
      </nav>
    </header>
  );
}