import { useParams, Link } from 'react-router-dom';
import { mockBooks } from '../lib/mockData';
import { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

const fontSizes = {
  sm: 'text-base',
  md: 'text-lg',
  lg: 'text-xl',
  xl: 'text-2xl',
};

const themes = {
  light: 'bg-light text-text-light',
  dark: 'bg-dark text-text-dark',
  sepia: 'bg-[#FBF0D9] text-[#5B4636]',
};

export default function ReaderPage() {
  const { id } = useParams();
  const book = mockBooks.find((b) => b.id === parseInt(id));
  const [fontSize, setFontSize] = useState('md');
  const [theme, setTheme] = useState('light');

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className={`${themes[theme]} min-h-screen flex flex-col transition-colors duration-300`}>
      {/* Reader Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm p-4 flex justify-between items-center sticky top-0 z-20">
        <div>
          <Link to={`/book/${id}`} className="font-body text-primary hover:underline">
            &larr; Back to Details
          </Link>
          <h1 className="font-heading text-xl font-bold text-text-light dark:text-text-dark mt-1">{book.title}</h1>
        </div>
        <div className="relative">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
                <div className="p-4 space-y-4">
                  <div>
                    <Menu.Item>
                      <label className="font-semibold text-gray-700 dark:text-gray-200">Font Size</label>
                    </Menu.Item>
                    <div className="flex justify-between items-center mt-2">
                      <button onClick={() => setFontSize('sm')} className={`px-3 py-1 rounded text-sm ${fontSize === 'sm' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>Aa</button>
                      <button onClick={() => setFontSize('md')} className={`px-3 py-1 rounded text-base ${fontSize === 'md' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>Aa</button>
                      <button onClick={() => setFontSize('lg')} className={`px-3 py-1 rounded text-lg ${fontSize === 'lg' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>Aa</button>
                      <button onClick={() => setFontSize('xl')} className={`px-3 py-1 rounded text-xl ${fontSize === 'xl' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>Aa</button>
                    </div>
                  </div>
                  <div>
                    <Menu.Item>
                      <label className="font-semibold text-gray-700 dark:text-gray-200">Theme</label>
                    </Menu.Item>
                    <div className="flex justify-between items-center mt-2">
                      <button onClick={() => setTheme('light')} className={`w-10 h-10 rounded-full bg-light border-2 ${theme === 'light' ? 'border-primary' : 'border-gray-300'}`}></button>
                      <button onClick={() => setTheme('sepia')} className={`w-10 h-10 rounded-full bg-[#FBF0D9] border-2 ${theme === 'sepia' ? 'border-primary' : 'border-gray-300'}`}></button>
                      <button onClick={() => setTheme('dark')} className={`w-10 h-10 rounded-full bg-dark border-2 ${theme === 'dark' ? 'border-primary' : 'border-gray-300'}`}></button>
                    </div>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 sm:px-12 lg:px-24 py-8">
        <div className={`max-w-3xl mx-auto font-body leading-loose transition-all duration-300 ${fontSizes[fontSize]}`}>
          <h2 className="font-heading text-3xl font-bold mb-6">Chapter 1: The Beginning</h2>
          <p>
            This is a placeholder for the actual book content. In a real implementation, this area would be populated with the text of the book, paginated or scrollable. The user would be able to adjust font sizes, margins, and background colors.
          </p>
          <br />
          <p>
            For now, imagine you are engrossed in the compelling narrative of "{book.title}", following the characters on their journey. The text flows seamlessly, and the interface is unobtrusive, allowing you to fully immerse yourself in the story. The line height is generous, and the text column is not too wide, which prevents eye strain during long reading sessions, a principle inspired by the best e-reader applications.
          </p>
        </div>
      </main>

       {/* Reader Footer */}
       <footer className="bg-white dark:bg-gray-800 shadow-inner p-4 flex justify-center items-center space-x-8 sticky bottom-0 z-20">
          <button className="font-body text-primary hover:underline">Previous</button>
          <span className="font-body text-sm text-text-muted-light dark:text-text-muted-dark">Page 1 of 352</span>
          <button className="font-body text-primary hover:underline">Next</button>
       </footer>
    </div>
  );
}