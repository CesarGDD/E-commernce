import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/shoppingSlice';
import './CheckoutProduct.css';

const CheckoutProduct = ({id, image, title, price, hideButton}) => {
    const dispatch = useDispatch();

    const removeFromBasket = () => {
        dispatch(
            removeItem(id)
        );
        //remove item
    }

    return (
        <div className="checkoutProduct" >
            <img className="checkoutProduct__image" src={image} alt="item"/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title"> {title} </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong> {price} </strong>
                    {!hideButton && (
                        <button
                          onClick={removeFromBasket} 
                          className="checkoutProduct__button" >Remove from Basket</button>
                    )}
                </p>
            </div>
        </div>
    )
}

export default CheckoutProduct;