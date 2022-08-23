import React from 'react'


const Header = () => {


    return (
        <div className='header'>
            <div className='logo'>
                <img src='.\icons8-yarn-100.png' alt='logo' />
                <span>
                    <h1>Knitted- Hand Made</h1>
                    <p>an online shop</p>
                </span>
            </div>
            <div className='cart-counter'>
                <p>cart</p>

            </div>

        </div>
    )
}

export default Header