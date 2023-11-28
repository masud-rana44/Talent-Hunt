import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/Form/CheckoutForm";
import { useLocation } from "react-router-dom";
import Container from "../components/Shared/container";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const ContestRegistration = () => {
  const location = useLocation();
  const { contest } = location.state;

  return (
    <Container>
      <h1 className="text-2xl text-gray-600 font-semibold text-center mt-10">{`Registration for ${contest?.title}`}</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm contest={contest} />
      </Elements>
    </Container>
  );
};

export default ContestRegistration;
