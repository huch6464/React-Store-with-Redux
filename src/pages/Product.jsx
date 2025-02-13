import React from 'react'
import { useSelector } from 'react-redux';

export default function Product(id) {

const product = useSelector(state=> state.productsName.ProductsList[`${id}-1`])

  return (
    <div key={product.id} className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center mb-2 ' >
    <div className="card h-100">
        <img src="https://placehold.co/600x400" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.body}</p>
        <p className="card-text">{product.price + ' ' +'$'}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  )
}
