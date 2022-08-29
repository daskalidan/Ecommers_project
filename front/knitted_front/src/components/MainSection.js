import React from 'react'
import { Outlet } from 'react-router-dom'
import AddNewCategory from './AddNewCategory'
import AddNewProduct from './AddNewProduct'
import Categories from './Categories'

import Grid from '@mui/material/Unstable_Grid2';

const MainSection = () => {

  return (
      <Grid container spacing={2}>
        <Grid xs={3}>
        left
            <AddNewCategory></AddNewCategory>
            <AddNewProduct></AddNewProduct>
            <Categories></Categories>
        </Grid>
        <Grid xs={9}>
        right
            <Outlet></Outlet>
        </Grid>
      </Grid>
  )
}

export default MainSection