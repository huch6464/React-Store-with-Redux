import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchData } from './../store/productsSlice';


export default function Products() {
 
  const products = useSelector((state)=>state.products.productsList);
  const status = useSelector((state)=>state.products.status);
  const error = useSelector((state)=>state.products.error);
  const dispatch = useDispatch();
  const state = useSelector(state=>state)
  console.log(state);
  useEffect(()=>{
    if(status === 'idle'){
      dispatch(fetchData())
    }
   },[status,dispatch])

  let list ;
  if(status === 'succeeded') {
   list =
   products.map(product=>{
      return(
        <div key={product.id} className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center mb-2 ' >
        <div className="card h-100">
            <img src="https://placehold.co/600x400" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.price}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      )
  })
  }else if(status === 'loading'){list = <p>loading ...</p>}
  else if(status === 'failed'){list = <p>{error}</p>}




  return (
    <div className='container text-center'>
        <div className='row my-5'>
          {list}
        </div>
    </div>
  );
}
