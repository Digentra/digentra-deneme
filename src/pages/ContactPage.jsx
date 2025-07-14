import { useForm } from 'react-hook-form';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import Label from '../components/atoms/Label';

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Thank you for your message! We will get back to you shortly.');
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold font-heading text-primary-dark dark:text-white">
          Get In Touch
        </h1>
        <p className="mt-4 text-xl text-text-muted-light dark:text-text-muted-dark leading-relaxed">
          Have questions or feedback? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="max-w-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" type="text" {...register('name', { required: 'Name is required' })} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Your Email</Label>
              <Input id="email" type="email" {...register('email', { required: 'Email is required' })} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                rows="6"
                className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                {...register('message', { required: 'Message cannot be empty.' })}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">Email Us</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark">support@digentra.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Address</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark">123 Bookworm Lane, Reader's City, 45678</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Social Media</h3>
            <div className="flex space-x-4 mt-2">
              {/* Add social media links/icons here */}
              <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary">Twitter</a>
              <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary">Facebook</a>
              <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
