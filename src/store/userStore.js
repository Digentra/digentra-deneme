import { create } from 'zustand';
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
      following: [], // Array of user IDs
      myLists: [], // Array of list objects { id, name, description, bookIds }
      login: (userData, token) => set({ user: userData, token, isAuthenticated: true }),
      logout: () => set({ user: null, token: null, isAuthenticated: false, library: [], following: [], myLists: [] }),
      toggleBookInLibrary: (bookId) =>
        set((state) => ({
          library: toggleBookInLibrary(state.library, bookId),
        })),
      followUser: (userId) => set((state) => ({ following: [...state.following, userId] })),
      unfollowUser: (userId) => set((state) => ({ following: state.following.filter(id => id !== userId) })),
      createList: (listData) => set((state) => ({ myLists: [...state.myLists, { id: Date.now(), ...listData }] })),
      // Add updateList and deleteList functions here in the future
      setUserPreferences: (preferences) => set((state) => ({ user: { ...state.user, preferences } })),
    }),
    {
      name: 'digentra-user-storage', // unique name for localStorage key
    }
  )
);

export default useUserStore;