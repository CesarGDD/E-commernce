import React from 'react';
import './Checkout.css';
import { useSelector } from 'react-redux';
import Subtotal from './Subtotal';
import { selectBasket } from '../features/shoppingSlice';
import { selectUser } from '../features/userSlice';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
    const itemsBasket = useSelector(selectBasket);
    const user = useSelector(selectUser);

    return (
        <div className="checkout">
            <div className="checkout__left">
                <div>
                    {user ? <h3>Greetings, {user.displayName} </h3> : null}
                    <h2 className="checkout__title" >Your Shopping Basket</h2>
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
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
