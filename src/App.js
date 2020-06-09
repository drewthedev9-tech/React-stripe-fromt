import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './components/Checkout/CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_K8nDcOlk6Sodllff0i3WRNql00v92YW3bt");

function App() {
  return (
    <div >
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
    </div>
    
  );
};

export default App
ReactDOM.render(<App />, document.getElementById('root'));