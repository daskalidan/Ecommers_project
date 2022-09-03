import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartCalc, cartItemsCountSelector, cartSelector } from '../features/cart/cartSlice'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';


const Header = () => {
    const dispatch = useDispatch();


    const myCartCount = useSelector(cartItemsCountSelector)
    const myCart = useSelector(cartSelector)


    useEffect(() => {
        dispatch(cartCalc())
    }, [myCart, dispatch])

    return (
        <Grid item xs={12}>
            <Box sx={{ backgroundColor: '#212529', color: 'white', display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                <Box sx={{ display: 'flex', paddingLeft: '5%', alignItems: 'center' }}>
                    <Link to='/' ><img src='.\icons8-yarn-100.png' alt='logo' /></Link>
                    <Box component='span' sx={{ paddingLeft: '10px', textAlign: 'center' }}>
                        <Typography variant="h4" >Knitted- Hand Made</Typography>
                        <Typography variant="body1" >an online shop</Typography>
                    </Box>
                </Box>
                <Box component='span' sx={{ alignSelf: 'end' }}>
                    <Link to='/cart' underline="none">
                        <Button color='primary' variant="contained" endIcon={<ShoppingCartIcon />}>
                            cart ({myCartCount})
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Grid>
    )
}

export default Header