import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light dark:bg-dark border-t border-border-light dark:border-border-dark mt-16">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
            &copy; {currentYear} Digentra, Inc. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
