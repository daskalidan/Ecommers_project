import React, { useState } from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, IconButton } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { authenticationSelector } from '../features/authentication/authenticationSlice';
import { deleteCategoryAsync } from '../features/shop/categorySlice';


const DeleteCategory = (props) => {
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
        dispatch(deleteCategoryAsync({'item': props.item, 'token': token}))
    };
    
  return (
    <Box component="span">
   <IconButton color="error" aria-label="delete" onClick={handleClickOpen}>
                <DeleteIcon />
              </IconButton>
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
          delete category {props.item.cat_name} from the shop?
          
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

export default DeleteCategory