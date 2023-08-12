import React from 'react'
import "../Styles/Nav.css"
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/">
             <h2>HOME</h2></Link>
            <Link to="/Login">
             <h2>LOGIN</h2>
             </Link>
             <Link to="/SignUp">
             <h2>SIGNUP</h2>
             </Link>
        </div>
    )
}
export default Navbar;