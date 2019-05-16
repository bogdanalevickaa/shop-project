import React from 'react'
import {keys} from 'lodash'
import './cart.css'

 const Cart = ({
    productsInCart
 }) => {
    return(
    <div className="cart text-center">
       {   //[1,2]
            keys(productsInCart).map((productId)=>(
                <div key={productId}>
                    <span>{productId}</span>: <span>{productsInCart[productId]}</span>
                </div>
            )) 
        }
    </div>
    )
}
export default Cart