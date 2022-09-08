import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, cartSelector, cartTotalPriceSelector, clearCart, removeFromCart } from '../features/cart/cartSlice'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, ButtonGroup } from '@mui/material';


const Cart = () => {
  const myCart = useSelector(cartSelector)
  const dispatch = useDispatch();
  const myTotalPrice = useSelector(cartTotalPriceSelector)


  return (
    <Box sx= {{ padding: '5%', textAlign: 'center' }}>
      <TableContainer component={Paper} >
        <h2>My cart</h2>
        {myCart.length === 0 ?
          (<p>cart is empty</p>) :
          (
            <Table sx={{ minWidth: 550 }} aria-label="simple table" >
              <TableHead>
                <TableRow>
                  <TableCell>product</TableCell>
                  <TableCell align="right">price</TableCell>
                  <TableCell align="right">quantity</TableCell>
                  <TableCell align="right">total price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {myCart.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row" >
                      <Box sx={{ alignItems: 'center', display: 'flex' }}>
                      <img alt='product img' src={item.get_thumbnail} width="50" height="50" />
                      <p>{item.name}</p>
                      </Box>
                    </TableCell>
                    <TableCell align="right">${item.price}</TableCell>
                    <TableCell align="right">
                      <ButtonGroup variant='contained' size="small">
                      <Button onClick={() => dispatch(removeFromCart(item))}>-</Button>
                      <Button>{item.quantity}</Button>
                      <Button onClick={() => dispatch(addToCart(item))}>+</Button>
                      </ButtonGroup>
                    </TableCell>
                    <TableCell align="right">${item.price * item.quantity}</TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell rowSpan={4} />
                  <TableCell colSpan={2}>Subtotal</TableCell>
                  <TableCell align="right">${myTotalPrice}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>shipping</TableCell>
                  <TableCell align="right">$20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>Total price</TableCell>
                  <TableCell align="right">${myTotalPrice + 20}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}><Button variant='contained' onClick={() => dispatch(clearCart())}>clear cart</Button></TableCell>
                  <TableCell align="right"><Button variant='contained'>checkout</Button></TableCell>
                </TableRow>
              </TableBody>
            </Table>)
        }
      </TableContainer>
      </Box>
  )
}

export default Cart