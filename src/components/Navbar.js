import React from 'react'
import { Outlet, Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
     <nav>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/signin">Click to sign in</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/notfound">Error</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
     </nav>

     <Outlet />
    </>
  )
}

export default Navbar
