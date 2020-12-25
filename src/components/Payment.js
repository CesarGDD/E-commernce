import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanBasket, getBasketTotal, selectBasket } from '../features/shoppingSlice';
import { selectUser } from '../features/userSlice';
import CheckoutProduct from './CheckoutProduct';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from '../axios';
import { useHistory } from 'react-router-dom';
import db from '../firebase';
import './Payment.css';

const Payment = () => {
    const user = useSelector(selectUser);
    const itemsBasket = useSelector(selectBasket);
    const dispatch = useDispatch();
    const history = useHistory();

    const [error, setError] = useState(null);
    const [disable, setDisable] = useState(true);
    const [succeeded, setSucceded] = useState(false);
    const [processing, setPocessing] = useState('');
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(()=> {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(itemsBasket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    },[itemsBasket]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPocessing(true);
        

        const payload = await stripe.confirmCardPayment(clientSecret
            , { 
                payment_method : {
                card: elements.getElement(CardElement)
            }}).then(({ paymentIntent }) => {
                //paymentIntent = payment confirmation

                db
                  .collection('users')
                  .doc(user?.uid)
                  .collection('orders')
                  .doc(paymentIntent.id)
                  .set({
                      basket: itemsBasket,
                      amount: paymentIntent.amount,
                      created: paymentIntent.created
                  })

                setSucceded(true);
                setError(null);
                setPocessing(false);

                dispatch(cleanBasket([]));

                history.replace('/orders');
            } ).catch((e)=> {
                alert('payment is not available at the moment, thank you for your attention')
                history.replace('/home');
            } )
    }

    const handleChange = (e) => {
        setDisable(e.empty);
        setError(e.error ? e.error.message  : '');
    }

    return (
        <>
        {!user ? null
         : 
        <div className="payment" >
            <div className="payment__container">
                <h1>Checkout (<Link to='/checkouth'> {itemsBasket.length} items </Link>)</h1>
                <div className="payment__section">
                   <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div> 
                    <div className="payment__address">
                        <p> {user?.displayName} </p>
                        
                        <p> Sidney NSW </p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {itemsBasket.map(item => (
                            <CheckoutProduct 
                              id={item.id}
                              title={item.title}
                              image={item.image}
                              price={item.price}
                              
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                            <form onSubmit={handleSubmit} >
                                <CardElement onChange={handleChange} />

                                <div className="payment__priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3>Order Total: {value} </h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(itemsBasket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disable || succeeded} >
                                        <span> {processing ? <p> Processing </p> : 'Buy Now' } </span>
                                    </button>
                                </div>
                                {error && <div> {error} </div>}
                            </form>
                    </div>
                </div>
            </div>
        </div>
         }
        </>
    )
}

export default Payment;
