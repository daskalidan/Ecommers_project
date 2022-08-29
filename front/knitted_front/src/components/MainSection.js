import React from 'react'
import { Outlet } from 'react-router-dom'
import AddNewCategory from './AddNewCategory'
import AddNewProduct from './AddNewProduct'
import Categories from './Categories'



const MainSection = () => {

  return (
    <div className='main-sec'>
        <div className='left'>
            left
            <AddNewCategory></AddNewCategory>
            <AddNewProduct></AddNewProduct>
            <Categories></Categories>
        </div>
        <div className='right'>
            right
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default MainSection