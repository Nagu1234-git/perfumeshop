
 import React from 'react'

import './Navbar.css'
import logo from '../../assets/logo.png'
import navProfile from '../../assets/nav-profile.png'



const Navbar = () => {

    

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt=""  width={100} height={50}/>
                <span>PERFUMES</span>
                <div className="nav-category">
                     <img className='nav-profile'  src={navProfile} alt="" />
                </div>
               
            </div>
         
            

        </div>
    )
}

export default Navbar

