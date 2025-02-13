import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
 return(
    <div>
       <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" >About This Project</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" >Link</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/cart'>Shopping cart</Link>
            </li>
      </ul>
    </div>
 )
}
