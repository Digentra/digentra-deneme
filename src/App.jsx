import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import useThemeStore from './store/themeStore';

function App() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen bg-light dark:bg-dark text-text-light dark:text-dark transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />}>
            <Route path="personal-info" element={<PersonalInfoPage />} />
            <Route path="login-security" element={<LoginSecurityPage />} />
            <Route path="payments" element={<MyPaymentsPage />} />
            <Route path="orders" element={<MyOrdersPage />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/subscribe" element={<SubscriptionPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          <Route path="/read/:id" element={<ReaderPage />} />
          <Route path="/listen/:id" element={<PlayerPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;