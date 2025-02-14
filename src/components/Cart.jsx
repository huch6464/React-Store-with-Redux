import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import { REMOVE_FROM_CART,ADD_TO_CART,DECREMENT_QUANTITY } from '../store/productsSlice';

export default function Cart() {
    const dispatch = useDispatch()
    const cartList = useSelector((state)=>state.productsName.cartList);

    const invoiceTotal = cartList.reduce((acc,item)=>acc + (item.price * item.quantity),0);

    const items = cartList.map(item=>{
      const total = item.price * item.quantity
    return(
      <tbody key={item.id}>
        <tr className=''>
          <td><img src={item.image} style={{height:'3rem'}} alt="..."/></td>
          <td>{item.title}</td>
          <td>{item.quantity}</td>
          <td>{item.price} $</td>
          <td>{total} $</td>
          <td> <button onClick={()=>dispatch(REMOVE_FROM_CART({id:item.id}))} className="btn btn-light h-100  "><i className="material-icons royalblue "style={{verticalAlign:'',color:'rgb(255, 149, 149)'}}>delete</i></button></td>
          <td>
               <div class="btn-group" role="group" aria-label="Basic example">
                  <button onClick={()=>{dispatch(ADD_TO_CART({id:item.id}))}} class="btn btn-primary">+</button>
                  <button onClick={()=>{dispatch(DECREMENT_QUANTITY({id:item.id}))}} class="btn btn-primary">-</button>
                </div>
            </td>
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
      <div className='d-flex justify-content-around bg-primary-subtle p-2 rounded'>
      <button type="button" className="btn btn-success">Confirm and transfer to the payment page</button>
      <div className='p-2'>The sum total of the invoice : <span className='mx-3 bg-danger px-2 text-light rounded'>{invoiceTotal} $</span> </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
