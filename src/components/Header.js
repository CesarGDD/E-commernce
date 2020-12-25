import React, { useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasket } from '../features/shoppingSlice';
import { logout, selectUser, login } from '../features/userSlice';
import { auth, provider } from '../firebase';

const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(()=> {
        auth.onAuthStateChanged(authUser => {
            if(authUser) {
                dispatch(login({
                    uid: authUser.uid,
                    displayName: authUser.displayName
                }))
            }else {
                dispatch(logout())
            }
        })
    },[dispatch]);

    const signIn = () => {
        auth.signInWithPopup(provider).catch(error => alert(error.message))
    }


    const itemsBasket = useSelector(selectBasket);
    return (
        <div className="header">
            <Link className="header__link" to='/'>
                <h1 className="header__logo" > Lux Watch </h1>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                        <span className="header__optionLineOne"> {user ? user.displayName : 'Greetings'} </span>
                        {!user ? 
                            <span onClick={signIn} className="header__optionLineTwo">Sign In</span>
                            
                                : 
                                <span 
                                  onClick={() => auth.signOut()}  
                                  className="header__optionLineTwo">
                                      Sign Out
                                </span>
                        }
                        
                </div>
                {/* <div className="header__option">
                        <span className="header__optionLineOne"> {user ? user.displayName : ''} </span>
                        {!user ? <Link className="header__link" to='/login'>
                            <span className="header__optionLineTwo">Sign In</span>
                                </Link> 
                                : 
                                <span 
                                  onClick={() => auth.signOut()}  
                                  className="header__optionLineTwo">
                                      Sign Out
                                </span>
                        }
                        
                </div> */}
                <div className="header__option">
                    <span className="header__optionLineOne"></span>
                    <Link className="header__link" to='/orders' >
                        <span className="header__optionLineTwo">My Orders</span>
                    </Link>
                </div>
                    <Link to='/checkout'>
                        <div className="header__optionBasket">
                                <ShoppingBasketIcon />
                            <span className="header__optionLineTwo header__basketCount"> {itemsBasket?.length} </span>
                        </div>
                    </Link>
            </div>
        </div>
    )
}

export default Header;
