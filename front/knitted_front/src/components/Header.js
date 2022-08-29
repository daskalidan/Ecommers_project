import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartCalc, cartItemsCountSelector, cartSelector } from '../features/cart/cartSlice'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();

    
    const myCartCount = useSelector(cartItemsCountSelector)
    const myCart = useSelector(cartSelector)
    

    useEffect(() => {
        dispatch(cartCalc())
    }, [myCart, dispatch])

    return (
        <div className='header'>
            <div className='logo'>
                <Link to='/' ><img src='.\icons8-yarn-100.png' alt='logo' /></Link>
                <span>
                    <h1>Knitted- Hand Made</h1>
                    <p>an online shop</p>
                </span>
            </div>
            <div className='cart-counter'>
                <Link to='/cart' underline="none">
                <Button color='primary' variant="contained" endIcon={<ShoppingCartIcon />}>
                    cart ({ myCartCount })
                </Button>
                </Link>

            </div>

        </div>
    )
}

export default Header