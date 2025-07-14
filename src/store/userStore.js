import create from 'zustand';
import { persist } from 'zustand/middleware';

// A simple toggle function for the library
const toggleBookInLibrary = (library, bookId) => {
  const bookIndex = library.indexOf(bookId);
  if (bookIndex === -1) {
    // Add book
    return [...library, bookId];
  } else {
    // Remove book
    return library.filter((id) => id !== bookId);
  }
};

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      library: [], // Array of book IDs
      login: (userData, token) => set({ user: userData, token, isAuthenticated: true }),
      logout: () => set({ user: null, token: null, isAuthenticated: false, library: [] }),
      toggleBookInLibrary: (bookId) =>
        set((state) => ({
          library: toggleBookInLibrary(state.library, bookId),
        })),
    }),
    {
      name: 'digentra-user-storage', // unique name for localStorage key
    }
  )
);

export default useUserStore;