
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productsInCategorySelector } from '../features/shop/productsSlice';
import { addToCart } from '../features/cart/cartSlice';
import { selectStaff } from '../features/authentication/authenticationSlice';
import AddNewCategory from './AddNewCategory'
import AddNewProduct from './AddNewProduct'
import Categories from './Categories'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Stack } from '@mui/material';
import DeleteProduct from './DeleteProduct';
import ProductDetails from './ProductDetails';




const Shop = () => {
  const dispatch = useDispatch();
  const pruductsAr = useSelector(productsInCategorySelector);

  const staff = useSelector(selectStaff)

  return (
    // <Box sx={{ textAlign: 'center'}}>
    //   shop
    <Grid container >
      <Grid item xs={12} sm={3} sx={{ padding: '5px' }}>
        <AddNewCategory></AddNewCategory>
        <AddNewProduct></AddNewProduct>
        <Categories></Categories>
      </Grid>
      <Grid item xs={12} sm={9} sx={{ padding: '10px' }}>

        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', textAlign: 'center' }}>
          {pruductsAr.map((item) => (
            <Card sx={{ maxWidth: 200, margin: '5px', minHeight: '300px', display: 'flex', flexDirection: 'column' }} key={item.id}>
              <Box>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.get_thumbnail}
                  alt={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                </CardContent>
              </Box>
              <CardActions>
                <Stack spacing={1} sx={{ width: '100%' }}>
                  <ProductDetails item={item} />
                  {staff && <DeleteProduct item={item} />}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button size="small" onClick={() => dispatch(addToCart(item))}>Add to cart</Button>
                    <Typography>${item.price}</Typography>
                  </Box>
                </Stack>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Grid>
    </Grid>
  )
}

export default Shop