import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        className="w-full h-56 object-cover object-center"
        src={course.image}
        alt={course.title}
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={course.instructor.avatar}
              alt={course.instructor.name}
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">
                {course.instructor.name}
              </p>
              <p className="text-gray-600">{course.instructor.role}</p>
            </div>
          </div>
          <div className="text-orange-500 font-bold text-xl">
            {course.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
