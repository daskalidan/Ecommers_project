import { Box, Button, Stack } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { categoriesSelector, categorySelector, chooseCategory } from '../features/shop/productsSlice';



const Categories = () => {
    const dispatch = useDispatch();

    const categoriesAr = useSelector(categoriesSelector);
    const active_cat = useSelector(categorySelector);

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={1} sx={{ textAlign: 'center' }}>
    <h3>categories</h3><hr/>
    <h4>active cat</h4>
    <h5>{active_cat.cat_name? active_cat.cat_name: active_cat}</h5><hr/>
    <Button onClick={() => dispatch(chooseCategory('all'))}>all (?)</Button>
    {categoriesAr.map((cat) => (
      <Button key={cat.id} onClick={() => dispatch(chooseCategory(cat))}>{cat.cat_name} (?)</Button>

    ))}
    </Stack>
    </Box>

  )
}

export default Categories