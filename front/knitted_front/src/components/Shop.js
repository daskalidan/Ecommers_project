
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productsInCategorySelector } from '../features/shop/productsSlice';
import { addToCart } from '../features/cart/cartSlice';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


const Shop = () => {
  const dispatch = useDispatch();
  const pruductsAr = useSelector(productsInCategorySelector);

  return (
    <Box sx={{ textAlign: 'center'}}>
      shop
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
        {pruductsAr.map((item) => (
          <Card sx={{ maxWidth: 200, margin: '5px', textAlign: 'start' }} key={item.id}>
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
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => dispatch(addToCart(item))}>Add to cart</Button>
              <span>${item.price}</span>
            </CardActions>
          </Card>
        ))}
      </Box>
      </Box>
  )
}

export default Shop