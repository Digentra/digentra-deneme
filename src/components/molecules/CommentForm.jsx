import { useForm } from 'react-hook-form';
import Button from '../atoms/Button';
import { useState } from 'react';

const StarIcon = ({ className, onClick, onMouseEnter, onMouseLeave }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 20 20" 
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function CommentForm({ onSubmit }) {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: { rating: 0, text: '' }
  });
  const [hoverRating, setHoverRating] = useState(0);
  const rating = watch('rating');

  const handleRating = (rate) => {
    setValue('rating', rate, { shouldValidate: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h3 className="text-2xl font-bold">Write a Review</h3>
      <div>
        <label className="font-bold">Your Rating</label>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => {
            const ratingValue = i + 1;
            return (
              <StarIcon
                key={ratingValue}
                className={`w-8 h-8 cursor-pointer ${ratingValue <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                onClick={() => handleRating(ratingValue)}
                onMouseEnter={() => setHoverRating(ratingValue)}
                onMouseLeave={() => setHoverRating(0)}
              />
            );
          })}
        </div>
        <input type="hidden" {...register('rating', { required: true, min: 1 })} />
        {errors.rating && <p className="text-red-500 text-xs mt-1">Please select a rating.</p>}
      </div>
      <div>
        <label htmlFor="comment" className="font-bold">Your Review</label>
        <textarea
          id="comment"
          rows="4"
          className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          {...register('text', { required: 'Review text cannot be empty.' })}
        ></textarea>
        {errors.text && <p className="text-red-500 text-xs mt-1">{errors.text.message}</p>}
      </div>
      <Button type="submit">Submit Review</Button>
    </form>
  );
}
