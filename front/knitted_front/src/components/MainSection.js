import React from 'react'
import { Outlet } from 'react-router-dom'
import AddNewCategory from './AddNewCategory'
import AddNewProduct from './AddNewProduct'
import Categories from './Categories'

import Grid from '@mui/material/Grid';

const MainSection = () => {

  return (
      <Grid container >
        <Grid item xs={12} sm={3} sx={{ padding: '5px' }}>
            <AddNewCategory></AddNewCategory>
            <AddNewProduct></AddNewProduct>
            <Categories></Categories>
        </Grid>
        <Grid item xs={12} sm={9} sx={{ padding: '10px' }}>
            <Outlet></Outlet>
        </Grid>
      </Grid>
  )
}

export default MainSection