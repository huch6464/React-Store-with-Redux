import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Cart() {
  
    const cartList = useSelector((state)=>state.productsName.cartList);

    const invoiceTotal = cartList.reduce((acc,item)=>acc + (item.price * item.quantity),0);

    const items = cartList.map(item=>{
      const total = item.price * item.quantity
    return(
      <tbody key={item.id}>
        <tr>
          <td><img src={item.image} style={{height:'3rem'}} alt="..."/></td>
          <td>{item.title}</td>
          <td>{item.quantity}</td>
          <td>{item.price}</td>
          <td>{total}</td>
        </tr>
     </tbody>
    )
  })




  return (
    <>
    <Navbar/>
    <div className='container text-center mt-5 'style={{minHeight: '26.5rem'}}>
       <table className="table">
         <thead>
          <tr>
           <th scope="col">Image</th>
           <th scope="col">Title</th>
           <th scope="col">Quantity</th>
           <th scope="col">Price</th>
           <th scope="col">Total</th>
          </tr>
        </thead>
         {items}
      </table>
      <div className='d-flex justify-content-around bg-warning p-2 rounded'>
      <button type="button" class="btn btn-success">Confirm and transfer to the payment page</button>
      <div className='p-2'>The sum total of the invoice : <span className='mx-3 bg-danger px-2 text-light rounded'>{invoiceTotal}</span> </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
