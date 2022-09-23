import { Stack, Button, Paper, Box, Typography, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectStaff, selectToken } from '../features/authentication/authenticationSlice';
import { addNewProductAsync } from '../features/shop/productsSlice';
import { categoriesSelector } from '../features/shop/categorySlice';


const AddNewProduct = () => {
  const dispatch = useDispatch();

  const [productName, setproductName] = useState('')
  const [category, setcategory] = useState('')
  const [price, setprice] = useState('')
  const [description, setdescription] = useState('')
  const [imag, setimag] = useState(null)

  const token = useSelector(selectToken);
  const staff = useSelector(selectStaff)
  const categoryOptions = useSelector(categoriesSelector)

  return (
    <Box sx={{ padding: '1px' }}>
    {staff && <Paper sx={{ backgroundColor: 'rgb(66, 64, 130)', textAlign: 'center', padding: '10%' }}><Stack spacing={1} >
      <Typography variant='h5'>Add New Product</Typography>
      <TextField value={productName} label='product name' onChange={(e) => setproductName(e.target.value)} required size="small" />
      <FormControl>
        <InputLabel id='cat'>Category</InputLabel>
      <Select value={category} onChange={(e) => setcategory(e.target.value)} label='Category' labelId='cat' size="small">
        {categoryOptions.map((cat) => (<MenuItem key={cat.id} value={cat.id} >{cat.cat_name}</MenuItem> ))}
      </Select>
      </FormControl>
      <TextField type='number' value={price} label='price' onChange={(e) => setprice(e.target.value)} required size="small" />
      <TextField value={description} label='description' onChange={(e) => setdescription(e.target.value)} required size="small" multiline />
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