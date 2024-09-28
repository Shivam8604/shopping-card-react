import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
        <nav>
            <div className='nav_box'>
                <span className='my_shop'>
                    DxO Shop
                </span>
                <div className='cart'>
                    <span>
                        <i className='fas fa-cart-plus'></i>
                    </span>
                    <span>0</span>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
