import { Link } from 'react-router-dom';
import Button from '../components/atoms/Button';

export default function OrderConfirmationPage() {
  return (
    <div className="container mx-auto px-6 py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <svg className="w-24 h-24 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <h1 className="mt-6 text-4xl font-extrabold font-heading text-primary-dark dark:text-white">
          Thank You For Your Order!
        </h1>
        <p className="mt-4 text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
          Your subscription is now active. You have unlimited access to our entire library.
        </p>
        <div className="mt-8">
          <Link to="/library">
            <Button variant="primary" className="text-lg">
              Start Exploring
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
