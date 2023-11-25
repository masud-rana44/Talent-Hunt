import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import FormLayout from "./FormLayout";
import { useEffect, useState } from "react";
import { axiosSecure } from "../../api";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { addParticipant } from "../../api/apiContests";
import useUser from "../../hooks/useUser";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const { contestId } = useParams();
  const { userData } = useUser();
  const amount = 500;

  useEffect(() => {
    const getClientSecret = async () => {
      const { data } = await axiosSecure.post("/create-payment-intend", {
        amount,
      });
      setClientSecret(data.clientSecret);
    };
    getClientSecret();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // If stripe or elements is not loaded, don't do anything
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);

    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
    }

    const { paymentIntent, error: stripeError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "Anonymous",
          },
        },
      });

    if (stripeError) {
      console.log(stripeError);
      toast.error(stripeError?.message || "Something went wrong");
    }

    if (paymentIntent?.status === "succeeded") {
      toast.success("Payment successful");
      console.log(paymentIntent);

      try {
        // save the payment to the db
        await addParticipant(contestId, userData?._id);
      } catch (error) {
        toast.error(error?.message || "Something went wrong");
      }
    }
  };

  return (
    <FormLayout onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || !user}
        className="btn mt-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Pay
      </button>
    </FormLayout>
  );
};

export default CheckoutForm;
