import React from 'react';
import { useDispatch } from 'react-redux';
import { setBasket } from '../features/shoppingSlice';
import './Product.css';

const Product = ({title, image, price, id}) => {
    const dispach = useDispatch()
    
    const addToBasket = () => {
        dispach(
            setBasket({
                        title: title,
                        image: image,
                        price: price,
                        id: id
            })
        )
    }

    return (
        <div className="product">
            <div className="product__info">
                <p> {title} </p>
                <p className="product__price">
                    $
                    <strong> {price} </strong> AUD
                </p>
                
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket} >Add to Basket</button>
        </div>
    )
} 

export default Product;
