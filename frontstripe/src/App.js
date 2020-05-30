import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import  Checkout  from './Checkout';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom'
import 'materialize-css'
import { CreatePage } from './CreatePage';
import { AuthPage } from './AuthPage';
import { Navbar } from './components/Navbar';

// useEffect(() => {
// const { data : stripeAccount} = await axios.post('http://localhost:5000/getstripekey)
// });


const stripePromise = loadStripe("pk_test_sJTL3aNfGRGm9XS15lLBbO5200tybuYbvy")
// второй параметр {stripeAccount});

function App() {
  // или здесь
  // useEffect(() => {
  // const { data : stripeAccount} = await axios.post('http://localhost:5000/getstripekey)
  // });


  //создать страницу CreatePage
  

  return (
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path='/' component={Checkout} exact/>
            <Route path='/auth' component={AuthPage} exact/>
            <Route path='/create' component={CreatePage} exact/>
            <Redirect to='/auth' />
          </Switch>
        </div>
      </BrowserRouter>
    </Elements>
  );
}

export default App
