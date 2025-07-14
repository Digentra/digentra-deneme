import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CourseCard from "./CourseCard";
import Button from "./Button";

const courses = [
  {
    title: "AWS Certified solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    image: "https://raw.githubusercontent.com/Taha-Batuhan-Yilmaz/E-Learning-Site-UI/main/src/assets/courses/course-1.png",
    instructor: {
      name: "Lina",
      avatar: "https://raw.githubusercontent.com/Taha-Batuhan-Yilmaz/E-Learning-Site-UI/main/src/assets/instructors/instructor-1.png",
    },
    price: "$100",
  },
  {
    title: "AWS Certified solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    image: "https://raw.githubusercontent.com/Taha-Batuhan-Yilmaz/E-Learning-Site-UI/main/src/assets/courses/course-2.png",
    instructor: {
      name: "Lina",
      avatar: "https://raw.githubusercontent.com/Taha-Batuhan-Yilmaz/E-Learning-Site-UI/main/src/assets/instructors/instructor-2.png",
    },
    price: "$100",
  },
  {
    title: "AWS Certified solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    image: "https://raw.githubusercontent.com/Taha-Batuhan-Yilmaz/E-Learning-Site-UI/main/src/assets/courses/course-3.png",
    instructor: {
      name: "Lina",
      avatar: "https://raw.githubusercontent.com/Taha-Batuhan-Yilmaz/E-Learning-Site-UI/main/src/assets/instructors/instructor-3.png",
    },
    price: "$100",
  },
];

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <main>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Studying Online is now much easier
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                TOTC is an interesting platform that will teach you in a more
                interactive way.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <Button>Join for free</Button>
                <a
                  href="#"
                  className="flex items-center text-gray-800 hover:text-orange-500"
                >
                  <svg
                    className="w-12 h-12 mr-2 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Watch how it works
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://raw.githubusercontent.com/Taha-Batuhan-Yilmaz/E-Learning-Site-UI/main/src/assets/hero-image.png"
                alt="Hero"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800">
                What is TOTC?
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                TOTC is a platform that allows educators to create online
                classes whereby they can store the course materials online;
                manage assignments, quizzes and exams; monitor due dates; grade
                results and provide students with feedback all in one place.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://raw.githubusercontent.com/Taha-Batuhan-Yilmaz/E-Learning-Site-UI/main/src/assets/what-is-totc.png"
                  alt="What is TOTC"
                  className="rounded-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  FOR INSTRUCTORS
                </h3>
                <Button>Start a class today</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800">
                Explore Course
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Ut sed eros finibus, placerat orci id, dapibus.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
