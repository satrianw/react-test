import React from 'react';
import Logo from '../image/kitabisa2.png'
import './Header.css'

function Header() {

    return (
        <div className='header'>
            <img className="header_icon" src={Logo} alt=""/>

            <div className='header_right'>
                <button >Sorting by Donation Goal</button>
            </div>
        </div>
    )
}

export default Header
