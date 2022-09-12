import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useDispatch, useSelector } from 'react-redux';
import { authenticationSelector } from '../features/authentication/authenticationSlice';
import { deleteProductAsync } from '../features/shop/productsSlice';
import { Box } from '@mui/material';


const DeleteProduct = (props) => {
    const dispatch = useDispatch();
    
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
        dispatch(deleteProductAsync({'item': props.item, 'token': token}))
    };
    
  return (
    <Box sx={{ width: '100%' }}>
    <Button sx={{ width: '100%' }} variant='contained' color="error" onClick={handleClickOpen}>
      delete
    </Button>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"delete ? "}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          delete product from the shop?
          {props.item.name}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant='contained' color="error" onClick={handleConfirm}>delete</Button>
      </DialogActions>
    </Dialog>
  </Box>
  )
}

export default DeleteProduct
