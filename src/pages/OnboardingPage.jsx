import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button';
import useUserStore from '../store/userStore';

const languages = ['Türkçe', 'English', 'Deutsch', 'Français', 'Español', 'Italiano', 'Русский', 'Português'];
const genres = ['Fiction', 'Science Fiction', 'Fantasy', 'Mystery', 'Thriller', 'Romance', 'Biography', 'History', 'Self-Help'];

export default function OnboardingPage() {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const navigate = useNavigate();
  const setUserPreferences = useUserStore((state) => state.setUserPreferences);
  const [isLoading, setIsLoading] = useState(false);

  const toggleSelection = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleContinue = () => {
    setIsLoading(true);
    setUserPreferences({ languages: selectedLanguages, genres: selectedGenres });
    // Simulate saving preferences
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1000);
  };

  const SelectionGrid = ({ title, items, selectedItems, onToggle }) => (
    <div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => onToggle(item, selectedItems, setSelectedLanguages)}
            className={`p-4 rounded-lg border-2 transition-colors ${
              selectedItems.includes(item)
                ? 'bg-indigo-600 border-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:border-indigo-500'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
  
  const GenreSelectionGrid = ({ title, items, selectedItems, onToggle }) => (
    <div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => onToggle(item, selectedItems, setSelectedGenres)}
            className={`p-4 rounded-lg border-2 transition-colors ${
              selectedItems.includes(item)
                ? 'bg-indigo-600 border-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:border-indigo-500'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">Welcome to Digentra!</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Personalize your experience by selecting your favorite languages and genres.
          </p>
        </div>

        <div className="space-y-12">
          <SelectionGrid
            title="Select your preferred languages"
            items={languages}
            selectedItems={selectedLanguages}
            onToggle={toggleSelection}
          />
          <GenreSelectionGrid
            title="Select your favorite genres"
            items={genres}
            selectedItems={selectedGenres}
            onToggle={toggleSelection}
          />
        </div>

        <div className="mt-12 text-center">
          <Button
            onClick={handleContinue}
            disabled={isLoading || selectedLanguages.length === 0 || selectedGenres.length === 0}
            className="w-full max-w-xs mx-auto"
          >
            {isLoading ? 'Saving...' : 'Continue'}
          </Button>
        </div>
      </div>
    </div>
  );
}
