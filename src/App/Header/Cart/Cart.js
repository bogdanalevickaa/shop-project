import React from 'react'

import './cart.css'

 const Cart = ({
     totalPrice,
     totalProductCount
 }) => {
    return(
    <div className="cart text-center">
       <div className="products-count">{totalProductCount}</div>
       <div className="products-price">$ {totalPrice}</div>
    </div>
    )
}
export default Cart