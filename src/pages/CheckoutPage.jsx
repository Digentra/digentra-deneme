import { useSearchParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import Label from '../components/atoms/Label';

export default function CheckoutPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const plan = searchParams.get('plan');
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Submitting order:', { plan, ...data });
    // Here you would integrate with a payment provider like Stripe
    alert('Payment successful! Redirecting to confirmation...');
    navigate('/order-confirmation');
  };

  if (!plan) {
    return (
      <div className="text-center py-20">
        <h2 className="font-heading text-2xl">No subscription plan selected.</h2>
        <Button onClick={() => navigate('/subscribe')} className="mt-4">Choose a Plan</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-lg mx-auto">
        <h1 className="text-4xl font-extrabold font-heading text-center mb-8">
          Checkout
        </h1>
        <div className="bg-light-card dark:bg-dark-card p-8 rounded-lg shadow-lg">
          <div className="mb-6 pb-6 border-b border-border-light dark:border-border-dark">
            <h2 className="text-2xl font-bold">Your Plan: {plan}</h2>
            {/* Add price details here based on the selected plan */}
            <p className="text-lg mt-2">{plan === 'Yearly' ? '$119.88 / year' : '$12.99 / month'}</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h3 className="text-xl font-bold">Payment Information</h3>
            <div>
              <Label htmlFor="cardName">Name on Card</Label>
              <Input id="cardName" type="text" {...register('cardName', { required: 'Name on card is required' })} />
              {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName.message}</p>}
            </div>
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              {/* In a real app, use Stripe's CardElement here */}
              <Input id="cardNumber" type="text" placeholder="•••• •••• •••• ••••" {...register('cardNumber', { required: 'Card number is required' })} />
              {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input id="expiryDate" type="text" placeholder="MM / YY" {...register('expiryDate', { required: 'Expiry date is required' })} />
                {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate.message}</p>}
              </div>
              <div>
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" type="text" placeholder="•••" {...register('cvc', { required: 'CVC is required' })} />
                {errors.cvc && <p className="text-red-500 text-xs mt-1">{errors.cvc.message}</p>}
              </div>
            </div>
            <div className="pt-6">
              <Button type="submit" className="w-full text-lg">
                Confirm and Pay
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
