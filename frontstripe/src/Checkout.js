import React from 'react'
import axios from 'axios'
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js'
import Form from './components/Form'

function Checkout() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (name, email, phone, city) => {
    if (!stripe || !elements) {
      return
    }

    const { data : clientSecret }  = await axios.post('http://localhost:5000/secret');

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name,
          email,
          phone,
          address: {
            city
          }
        }
      }
    })
    if (result.error) {
      console.log(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Money is in the bank!')
      }
    }
  }

  return (
    <React.Fragment>
      <Form sendFile={handleSubmit}/>

      {/* Stripe переход для покупателя */}
      <a href='https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_HMDSoE8xRFRt2mNSm8V8GMp4JmZoRvmt&scope=read_write'>Connect with stripe</a>
    
    </React.Fragment>
  )
}


export default Checkout