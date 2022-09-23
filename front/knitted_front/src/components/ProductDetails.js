import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { authenticationSelector, selectStaff } from '../features/authentication/authenticationSlice';
import { deleteProductAsync, editProductAsync } from '../features/shop/productsSlice';
import { addToCart } from '../features/cart/cartSlice';
import { categoriesSelector } from '../features/shop/categorySlice';

const ProductDetails = (props) => {
    const dispatch = useDispatch();

    const auth = useSelector(authenticationSelector);
    const token = auth.token;
    const staff = useSelector(selectStaff)
    const categoryOptions = useSelector(categoriesSelector)

    const [open, setOpen] = useState(false)
    const [prodimg, setprodimg] = useState(props.item.get_thumbnail)
    const [prodname, setprodname] = useState(props.item.name)
    const [prodcat, setprodcat] = useState(props.item.category)
    const [proddesc, setproddesc] = useState(props.item.description)
    const [prodprice, setprodprice] = useState(props.item.price)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        setOpen(false);
        dispatch(deleteProductAsync({ 'item': props.item, 'token': token }))
    };

    const handleEdit = () => {
        setOpen(false);
        dispatch(editProductAsync( {
            'name': prodname,
            'category': prodcat,
            'price': prodprice,
            'description': proddesc,
            'imag': prodimg,
            'token': token,
            'id': props.item.id,
            'thumbnail': null
          }))
    };

    return (
        <Box sx={{ width: '100%' }}>
            {staff ? <Button sx={{ width: '100%' }} variant='contained' color="warning" onClick={handleClickOpen}>Edit</Button> :
                <Button sx={{ width: '100%' }} onClick={handleClickOpen}>view Details</Button>}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Product Details"}
                </DialogTitle>
                <DialogContent >
                    <img alt={prodname} src={prodimg} width="200" height="200" />
                    {!staff && <Card sx={{ maxWidth: 200 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">{prodname}</Typography>
                            <Typography variant="body1">product id: {props.item.id}</Typography>
                            <Typography>category: {prodcat}</Typography>
                            <Typography variant="body2" color="text.secondary">{proddesc}</Typography>
                            <Typography>${prodprice}</Typography>
                        </CardContent>
                    </Card>}
                    {staff && <Box sx={{ width: '300px' }}>
                    <input type='file' placeholder='imag' onChange={(e) => setprodimg(e.target.files[0])}></input>
                        <TextField sx={{ marginTop: '10px' }} value={prodname} label='product name' onChange={(e) => setprodname(e.target.value)} size="small" />
                        <Typography>product id: {props.item.id}</Typography>
                        <FormControl>
                            <InputLabel id='cat'>Category</InputLabel>
                            <Select value={prodcat} onChange={(e) => setprodcat(e.target.value)} label='Category' labelId='cat' size="small">
                                {categoryOptions.map((cat) => (<MenuItem key={cat.id} value={cat.id} >{cat.cat_name}</MenuItem>))}
                            </Select>
                        </FormControl>
                        <TextField sx={{ marginTop: '10px', marginBottom: '10px' }} value={proddesc} label='description' onChange={(e) => setproddesc(e.target.value)} size="small" multiline />
                        <TextField type='number' value={prodprice} label='price' onChange={(e) => setprodprice(e.target.value)} size="small" />
                    </Box>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    {staff && <Button variant='contained' color="warning" onClick={handleEdit}>Edit</Button>}
                    {staff && <Button variant='contained' color="error" onClick={handleConfirm}>delete</Button>}
                    {!staff && <Button size="small" onClick={() => dispatch(addToCart(props.item))}>Add to cart</Button>}
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default ProductDetails