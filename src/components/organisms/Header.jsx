import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUserStore from '../../store/userStore';
import ThemeToggle from '../atoms/ThemeToggle';
import Search from '../atoms/Search';

export default function Header() {
  const { isAuthenticated, user, logout } = useUserStore();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
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

        <div className="hidden md:block flex-1 max-w-lg mx-4">
          <Search />
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
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
              </>
            ) : (
              <>
                <Link to="/login" className="font-body font-semibold px-6 py-2 rounded-full text-primary border border-primary hover:bg-primary hover:text-white transition-all duration-300">
                  Login
                </Link>
                <Link to="/register" className="font-body font-semibold px-6 py-2 rounded-full bg-primary text-white hover:bg-opacity-90 transition-all duration-300">
                  Sign Up
                </Link>
              </>
            )}
          </div>
           {/* Mobile Menu Button */}
           <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              </button>
           </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-light dark:bg-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <Link key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700">
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              {isAuthenticated ? (
                <div className="px-2 space-y-1">
                   <button onClick={() => {navigate('/profile'); setIsMobileMenuOpen(false);}} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700">
                    Your Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="px-2 space-y-1">
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700">Login</Link>
                  <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700">Sign Up</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}