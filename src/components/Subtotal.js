import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBasketTotal, selectBasket } from '../features/shoppingSlice';
import { selectUser } from '../features/userSlice';

const Subtotal = () => {
    const itemsBasket = useSelector(selectBasket);
    const user = useSelector(selectUser);
    const history = useHistory();
    return (
        <div className="subtotal">
             <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                          Subtotal ({itemsBasket.length} items):
                          <strong> {` ${value}`} </strong>
                        </p>
                        <small className="subtotal__gift" >
                            <input type="checkbox" /> 
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(itemsBasket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={!user ? e => history.push('/login') : e => history.push('/payment')} >Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
