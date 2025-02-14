import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
 return(
    <div className=' position-sticky top-0 z-3'>
       <ul className="nav d-flex justify-content-around bg-primary-subtle text-light-emphasis">
            <li className="nav-item">
              <Link to='/' className="nav-link text-light-emphasis">Products</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-light-emphasis" >About This Project </Link>
            </li>
            <li className="nav-item ">
              <Link to='/cart' className="nav-link text-light-emphasis">Shopping cart</Link>
            </li>
      </ul>
    </div>
 )
}
