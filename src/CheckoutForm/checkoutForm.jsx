import React from 'react';
import {ElementsConsumer, CardElement} from '@stripe/react-stripe-js';
import axios from "axios";
///
import Image from "../imageComp/imageComp"
import Input from "./input"
import Card from "../Card/card";
import Button from "../button/button"
import "./checkoutForm.css"



class CheckoutForm extends React.Component {

  state={
    name: "",
    email: "",
    phone: ""
  }

  

 

  // input helper method.
  handleName = async e =>{
    await this.setState({
      name: e.target.value,
     
    })
  }
  handleEmail = async e =>{
    await this.setState({
      email: e.target.value,
     
    })
  }

  handlePhone = async e =>{
    await this.setState({
      phone: e.target.value,
    })
  }


  handleSubmit = async (event) => {

    // sending form data to back end with axios library.
    const {name, email,phone} = this.state;
    let formData = new FormData();
    formData.append(name);
    formData.append(email);
    formData.append(phone);  
    const url = ("http://127.0.0.1/React-stripe-API/charge.php");
    axios.post(url,formData)
    .then(res=> console.log(res.data))
    .catch(err=> console.log(err))

    console.log(name,email,phone);

    // make function 
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const {stripe, elements} = this.props;

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make  sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      // Show error to your customer.
      console.log(result.error.message);
    } else {
      // Send the token to your server.
     
      stripeTokenHandler(result.token);
    }

    function stripeTokenHandler(token) {
      const paymentData = {token: token.id};
      // // const proxyUrl = 'https://cors-anywhere.herokuapp.com/http://sipla.cuci.udg.mx/sc/horariop.php?c=219359735&k=0d8ce4fab5f4df9ce711cae81e044e1a';";
      console.log(paymentData);
       //Use fetch to send the token ID and any other payment data to your server.
       //   https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      const response = axios.post('http://127.0.0.1/React-stripe-API/charge.php', {
        method: 'POST',
        headers: {
        //   'X-Requested-With': 'XMLHttpRequest',
        //  'Access-Control-Allow-Origin': 'http://localhost:3000',
        //   'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData),
      });
        // axios({
        //     method: 'post',
        //     url: '/api/contacts.php',
        //     data: formData,
        //     config: { headers: {'Content-Type': 'multipart/form-data' }}
        // })
      console.log("data submitted");
       // Return and display the result of the charge.
      return response;
    }

    
  };
  

 
  render(){
    const {handleName,handlePhone,handleEmail} = this;
    return (
      <div className ="back-drop">
        <div className="container">
                <Image/>
              <form onSubmit={this.handleSubmit}>
                <Input 
                handleName={handleName}
                handleEmail={handleEmail}
                handlePhone={handlePhone}
                 />
                  <Card/>
                  <Button type="submit" disabled={!this.props.stripe}/>
            </form>
          </div>
        </div>
    );
  }
  }
  

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({stripe, elements}) => (
        <CheckoutForm  stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}

