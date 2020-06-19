import React from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
///
import Image from "../imageComp/imageComp"
import Input from "./input"
import Card from "../Card/card";
import Button from "../button/button"
import "./checkoutForm.css"






export default function CheckoutForm() {


    
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async(event)=>{
    event.preventDefault();

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      // use the card element from stripe.
      card: elements.getElement(CardElement)

    });

    if (!error){
      console.log(paymentMethod);
      // const {id} = paymentMethod; 
      // const {data} = await axios.post("/api/charge",{id, amount:4000})
    } try{

    }catch(error){
      console.log(error)
    }


  }

 
  
  return (
    <div className ="back-drop">
      <div className="container">
              <Image/>
            <form onSubmit={handleSubmit}>
              <Input/>
                <Card/>
                <Button type="submit" disabled={!stripe}/>
          </form>
        </div>
      </div>
  );
}



