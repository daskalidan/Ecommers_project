import { Box, Button, Paper, Stack } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { categorySelector, chooseCategory } from '../features/shop/productsSlice';
import { categoriesSelector } from '../features/shop/categorySlice';


const Categories = () => {
  const dispatch = useDispatch();

  const categoriesAr = useSelector(categoriesSelector);
  const active_cat = useSelector(categorySelector);

  return (
    <Box sx={{ width: '100%', padding: '1px' }}>
      <Stack spacing={1} sx={{ textAlign: 'center' }}>
        <Paper>
        <h3>categories</h3><hr />
        <h4>active cat</h4>
        <h5>{active_cat.cat_name ? active_cat.cat_name : active_cat}</h5><hr />
        <Button sx={{ width: '80%' }} onClick={() => dispatch(chooseCategory('all'))}>all (?)</Button>
        {categoriesAr.map((cat) => (
          <Button sx={{ width: '80%' }} key={cat.id} onClick={() => dispatch(chooseCategory(cat))}>{cat.cat_name} (?)</Button>
        ))}
        </Paper>
      </Stack>
    </Box>

  )
}

export default Categories