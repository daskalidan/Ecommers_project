import { Box, Button, Paper, Stack } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectStaff, selectToken } from '../features/authentication/authenticationSlice';
import { addNewCategoryAsync } from '../features/shop/productsSlice';


const AddNewCategory = () => {
    const dispatch = useDispatch();

    const [newCat, setnewCat] = useState('')
    const token = useSelector(selectToken);
    const staff = useSelector(selectStaff)

    return (
        <Box sx={{ padding: '1px' }}>
        { staff && <Paper sx={{ backgroundColor: 'rgb(66, 64, 130)', textAlign: 'center', padding: '10%' }}><Stack spacing={1}>
            <h3>add new category</h3>
            <input type='text' value={newCat} placeholder='category name' onChange={(e) => setnewCat(e.target.value)}></input>

            <Button variant='contained' onClick={() => dispatch(addNewCategoryAsync(
                {
                    'category': newCat,
                    'token': token
                }
            ))}>add category</Button>
        </Stack></Paper>}
        </Box>
    )
}

export default AddNewCategory