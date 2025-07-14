import { useState } from 'react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'it', name: 'Italiano' },
  { code: 'ru', name: 'Русский' },
  { code: 'pt', name: 'Português' },
];

const formats = [
  { id: 'ebook', name: 'E-Book' },
  { id: 'audiobook', name: 'Audiobook' },
];

export default function LanguageFormatSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedFormat, setSelectedFormat] = useState(formats[0]);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        {/* Language Selector */}
        <div>
          <label htmlFor="language" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Language</label>
          <select
            id="language"
            name="language"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={selectedLanguage.code}
            onChange={(e) => setSelectedLanguage(languages.find(l => l.code === e.target.value))}
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
          </select>
        </div>

        {/* Format Selector */}
        <div>
          <label htmlFor="format" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Format</label>
          <div className="mt-1 flex rounded-md shadow-sm">
            {formats.map((format, index) => (
              <button
                key={format.id}
                type="button"
                onClick={() => setSelectedFormat(format)}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium
                  ${index === 0 ? 'rounded-l-md' : ''}
                  ${index === formats.length - 1 ? 'rounded-r-md' : '-ml-px'}
                  ${selectedFormat.id === format.id
                    ? 'bg-indigo-600 text-white z-10'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'
                  }
                  focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500
                `}
              >
                {format.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
