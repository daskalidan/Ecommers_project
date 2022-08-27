import React from 'react'
import { Outlet } from 'react-router-dom'
import AddNewProduct from './AddNewProduct'



const MainSection = () => {

  return (
    <div className='main-sec'>
        <div className='left'>
            left
            <AddNewProduct></AddNewProduct>
        </div>
        <div className='right'>
            right
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default MainSection