import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { ADD_TO_CART, fetchData } from './../store/productsSlice';
import Navbar from './Navbar';
import Footer from './Footer';




export default function Products() {
 
  const products = useSelector((state)=>state.productsName.productsList);
  const status = useSelector((state)=>state.productsName.status);
  const error = useSelector((state)=>state.productsName.error);
  const cartList = useSelector((state)=>state.productsName.cartList)
  const dispatch = useDispatch();
  


  useEffect(()=>{
    if(status === 'idle'){
      dispatch(fetchData())
    }
   },[status,dispatch])


  let list ;
  if(status === 'succeeded') {
   list =
   products.map(product=>{
     const cartItem = cartList.find(item=>item.id === product.id)
      return(
        <div key={product.id} className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center mb-2 ' >
        <div className="card h-100">
            <img src={product.image} className="card-img-top p-4" style={{height:'15rem'}} alt="..."/>
          <div className="card-body d-flex flex-column justify-content-around" style={{height:'17rem'}}>
            <h5 className="card-title h-75 overflow-auto">{product.title}</h5>
            <p className="card-text h-50 overflow-auto border">{product.description} </p>
            <p className="card-text">{product.price} $</p>
            <button onClick={()=>{dispatch(ADD_TO_CART(product))}} className="btn btn-primary position-relative">
                 <span className="badge rounded-pill bg-danger text-light position-absolute top-0 start-0">{cartItem ? cartItem.quantity : ''}</span>
              add to card
              </button>
          </div>
        </div>
      </div>
      )
  })
  }else if(status === 'loading'){list = <p>loading ...</p>}
  else if(status === 'failed'){list = <p>{error}</p>}




  return (
    <>
    <Navbar/>
    <div className='container text-center'>
        <div className='row my-5'>
          {list}
        </div>
    </div>
    <Footer/>
    </>
  );
}
