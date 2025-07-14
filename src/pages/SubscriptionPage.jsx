import { useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button';

const plans = [
  {
    name: 'Monthly',
    price: '$12.99',
    period: '/month',
    features: [
      'Access to thousands of books',
      'Read and listen in 8 languages',
      'Offline access',
      'Cancel anytime',
    ],
    primary: false,
  },
  {
    name: 'Yearly',
    price: '$9.99',
    period: '/month',
    billedAs: 'Billed as $119.88 per year',
    features: [
      'Everything in Monthly',
      'Save 23% compared to monthly',
      'Priority support',
      'Early access to new titles',
    ],
    primary: true,
  },
];

const PlanCard = ({ plan, onSelect }) => (
  <div className={`p-8 rounded-xl border ${plan.primary ? 'border-primary-dark dark:border-primary scale-105' : 'border-border-light dark:border-border-dark'} bg-light-card dark:bg-dark-card shadow-lg`}>
    <h3 className="text-2xl font-bold font-heading">{plan.name}</h3>
    {plan.billedAs && <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-1">{plan.billedAs}</p>}
    <div className="flex items-baseline my-6">
      <span className="text-5xl font-extrabold">{plan.price}</span>
      <span className="ml-1 text-xl font-semibold text-text-muted-light dark:text-text-muted-dark">{plan.period}</span>
    </div>
    <ul className="space-y-4 mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button onClick={() => onSelect(plan.name)} className="w-full text-lg" variant={plan.primary ? 'primary' : 'secondary'}>
      Choose Plan
    </Button>
  </div>
);

export default function SubscriptionPage() {
  const navigate = useNavigate();

  const handleSelectPlan = (planName) => {
    navigate(`/checkout?plan=${planName}`);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold font-heading text-primary-dark dark:text-white">
          Choose Your Plan
        </h1>
        <p className="mt-4 text-xl text-text-muted-light dark:text-text-muted-dark leading-relaxed">
          Unlimited access to our entire library. Cancel anytime.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {plans.map(plan => (
          <PlanCard key={plan.name} plan={plan} onSelect={handleSelectPlan} />
        ))}
      </div>
    </div>
  );
}
