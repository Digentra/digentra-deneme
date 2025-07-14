import { useState } from 'react';

const faqs = [
  {
    question: 'What is Digentra?',
    answer: 'Digentra is a global digital library that gives you access to thousands of e-books and audiobooks in 8 different languages, all under one subscription.'
  },
  {
    question: 'How does the multi-language feature work?',
    answer: 'Every book on our platform is available in 8 languages. You can switch between the e-book and audiobook formats, and even between languages, and your progress will be saved and synchronized across all your devices.'
  },
  {
    question: 'Can I read or listen offline?',
    answer: 'Yes! You can download any e-book or audiobook to your personal library to enjoy them offline, anytime, anywhere.'
  },
  {
    question: 'What subscription plans are available?',
    answer: 'We offer monthly and yearly subscription plans. We also have a 14-day free trial for new users to explore our full library.'
  }
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-light dark:border-border-dark py-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">{faq.question}</h3>
        <span className="text-2xl">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="mt-4 text-text-muted-light dark:text-text-muted-dark">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold font-heading text-primary-dark dark:text-white">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FaqItem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
}
