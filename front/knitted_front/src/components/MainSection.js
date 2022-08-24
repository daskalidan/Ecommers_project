import React from 'react'
import { Outlet } from 'react-router-dom'

const MainSection = () => {
  return (
    <div className='main-sec'>
        <div className='left'>
            left
        </div>
        <div className='right'>
            right
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default MainSection