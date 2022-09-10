import { Stack, Button, Paper, Box } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectStaff, selectToken } from '../features/authentication/authenticationSlice';
import { addNewProductAsync } from '../features/shop/productsSlice';


const AddNewProduct = () => {
  const dispatch = useDispatch();

  const [productName, setproductName] = useState('')
  const [category, setcategory] = useState('')
  const [price, setprice] = useState('')
  const [description, setdescription] = useState('')
  const [imag, setimag] = useState(null)

  const token = useSelector(selectToken);
  const staff = useSelector(selectStaff)

  return (
    <Box sx={{ padding: '1px' }}>
    {staff && <Paper sx={{ backgroundColor: 'rgb(66, 64, 130)', textAlign: 'center', padding: '10%' }}><Stack spacing={1} >
      <h3>Add New Product</h3>
      <input type='text' value={productName} placeholder='product name' onChange={(e) => setproductName(e.target.value)}></input>{' '}
      <input type='number' value={category} placeholder='category' onChange={(e) => setcategory(e.target.value)}></input>{' '}
      <input type='number' value={price} placeholder='price' onChange={(e) => setprice(e.target.value)}></input>{' '}
      <input type='text' value={description} placeholder='description' onChange={(e) => setdescription(e.target.value)}></input>{' '}
      <input type='file' placeholder='imag' onChange={(e) => setimag(e.target.files[0])}></input>{' '}

      <Button variant='contained' onClick={() => dispatch(addNewProductAsync(
        {
          'name': productName,
          'category': category,
          'price': price,
          'description': description,
          'imag': imag,
          'token': token
        }))
      }>add product</Button>
    </Stack></Paper>}
    </Box>
  )
}

export default AddNewProduct