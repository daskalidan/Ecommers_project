import React from 'react'
import { Outlet } from 'react-router-dom'

import Grid from '@mui/material/Grid';

const MainSection = () => {

  return (
    <Grid item xs={12}>
      <Outlet></Outlet>
    </Grid>
  )
}

export default MainSection