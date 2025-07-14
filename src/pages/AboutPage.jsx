export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold font-heading text-primary-dark dark:text-white">
          Our Vision
        </h1>
        <p className="mt-4 text-xl text-text-muted-light dark:text-text-muted-dark leading-relaxed">
          To be the world's leading multilingual, AI-powered digital library platform, connecting book lovers with the stories they love, without language barriers.
        </p>
      </div>

      <div className="mt-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-4">
              Digentra is a global, subscription-based platform offering access to thousands of e-books and audiobooks. What sets us apart is our commitment to breaking down linguistic barriers. We offer every title in 8 different languages, leveraging a combination of professional translators and a sophisticated AI-powered infrastructure.
            </p>
            <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              Our killer feature is the seamless, synchronized transition between e-book and audiobook formats, even across different languages. Start reading a chapter in English on your phone, and continue listening in Turkish from the exact same spot on your commute. It's a reading experience without limits.
            </p>
          </div>
          <div>
            {/* Placeholder for an image about the team or company */}
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg w-full h-80 flex items-center justify-center">
              <span className="text-gray-500">Team Image Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
