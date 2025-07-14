import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import BookDetailPage from './pages/BookDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OnboardingPage from './pages/OnboardingPage';
import LibraryPage from './pages/LibraryPage';
import ReaderPage from './pages/ReaderPage';
import PlayerPage from './pages/PlayerPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import PersonalInfoPage from './pages/PersonalInfoPage';
import LoginSecurityPage from './pages/LoginSecurityPage';
import MyPaymentsPage from './pages/MyPaymentsPage';
import MyOrdersPage from './pages/MyOrdersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import SubscriptionPage from './pages/SubscriptionPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import AuthorDetailPage from './pages/AuthorDetailPage';
import UserProfilePage from './pages/UserProfilePage';
import MyListsPage from './pages/MyListsPage';
import CreateListPage from './pages/CreateListPage';
import ListDetailPage from './pages/ListDetailPage';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import useThemeStore from './store/themeStore';
import { Toaster } from 'react-hot-toast';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

function App() {
  const theme = useThemeStore((state) => state.theme);
  const location = useLocation();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen bg-light dark:bg-dark text-text-light dark:text-dark transition-colors duration-300">
      <Toaster position="top-right" />
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/book/:id" element={<BookDetailPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/onboarding" element={<OnboardingPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/author/:authorName" element={<AuthorDetailPage />} />
              <Route path="/user/:userId" element={<UserProfilePage />} />
              <Route path="/profile" element={<ProfilePage />}>
                <Route index element={<PersonalInfoPage />} />
                <Route path="personal-info" element={<PersonalInfoPage />} />
                <Route path="login-security" element={<LoginSecurityPage />} />
                <Route path="payments" element={<MyPaymentsPage />} />
                <Route path="orders" element={<MyOrdersPage />} />
                <Route path="my-lists" element={<MyListsPage />} />
                <Route path="lists/new" element={<CreateListPage />} />
              </Route>
              <Route path="/lists/:listId" element={<ListDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/subscribe" element={<SubscriptionPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
              <Route path="/read/:id" element={<ReaderPage />} />
              <Route path="/listen/:id" element={<PlayerPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;