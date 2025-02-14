import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'






export default function Navbar() {
  const cartList = useSelector((state)=>state.productsName.cartList)
  
 return(
    <div className=' position-sticky top-0 z-3'>
       <ul className="nav d-flex justify-content-around bg-primary-subtle text-light-emphasis">
            <li className="nav-item">
              
              <Link to='/' className="nav-link text-light-emphasis">  <i className="material-icons royalblue me-2 "style={{verticalAlign:'-7px',color:'rgb(120, 120, 250)'}}>store</i>Products</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-light-emphasis" ><i className="material-icons royalblue me-2 "style={{verticalAlign:'-7px',color:'rgb(120, 120, 250)'}}>help</i>About This Project </Link>
            </li>
            <li className="nav-item ">
              <Link to='/cart' className="nav-link text-light-emphasis position-relative">
                <i className="material-icons royalblue me-2 "style={{verticalAlign:'-7px',color:'rgb(120, 120, 250)'}}>
                  shopping_cart 
                </i>
                <span className="badge rounded-pill bg-danger text-light position-absolute top-0 start-0">+{cartList.length}</span>
                    Shopping cart
              </Link>
            </li>
      </ul>
    </div>
 )
}
