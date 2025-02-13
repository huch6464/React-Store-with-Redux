import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from './Navbar';

export default function Cart() {

  
    const state = useSelector((state)=>state)
    console.log(state);

  const cartList = useSelector((state)=>state.productsName.cartList);

  const items = cartList.map(item=>{
    return(
      <div key={item.id} className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center mb-2 w-100' >
      <div className='cart d-flex flex-row justify-content-around align-items-center '>
          <div className='w-100'>img</div>
          <div className='w-100 overflow-auto'>{item.title}</div>
          <div className='w-100'>counter</div>
          <div className='w-100'>{item.price}</div>
          <div className='w-100'>total</div>
      </div>
  </div>
 
    )
  })




  return (
    <>
    <Navbar/>
    <div className='container text-center'>
        <div className='row my-5'>
          {items}
        </div>
    </div>
    </>
  )
}
