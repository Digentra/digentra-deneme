import React from 'react';

const Input = React.forwardRef(({ type = 'text', id, name, className = '', ...props }, ref) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      ref={ref}
      className={`mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;