import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { cartSelector, cartTotalPriceSelector, placeAnOrderAsync } from '../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { authenticationSelector } from '../features/authentication/authenticationSlice';


const ConfirmOrder = () => {
    const myCart = useSelector(cartSelector)
    const dispatch = useDispatch();
    const myTotalPrice = useSelector(cartTotalPriceSelector)
    
    const auth = useSelector(authenticationSelector);
    const token = auth.token;


    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleConfirm = () => {
        setOpen(false);
        dispatch(placeAnOrderAsync({token,myCart,myTotalPrice}))
    };
    

  return (
    <div>
    {token? <Button variant="contained" onClick={handleClickOpen}>checkout</Button>: <Button variant="contained" disabled>login to checkout</Button>}    
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"checkout confirm"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Do you like to place this order?<br/>
          total price ${myTotalPrice}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleConfirm}>Order</Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default ConfirmOrder