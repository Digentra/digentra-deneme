import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query.trim()}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books, authors..."
        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <div className="absolute top-0 left-0 inline-flex items-center p-2 h-full">
        <svg
          className="w-6 h-6 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </form>
  );
}
