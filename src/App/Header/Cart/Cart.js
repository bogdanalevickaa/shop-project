import React from 'react'
import {keys} from 'lodash'
import {Link} from 'react-router-dom'
import './cart.css'
import CartTotal from '../../../features/Cart/CartTotal'

import products, {getProductsMap} from '../../Main/Products/products'

 const Cart = ({
    productsInCart,
    productsMap = getProductsMap(products)
 }) => {
    return(
    <div className="cart text-center">
       {   //[1,2]
            keys(productsInCart).map((productId)=>(
                <div key={productId}>
                    <span>{productsMap[productId].name}</span>: <span>{productsInCart[productId]}</span>
                </div>
            )) 
        }
        <CartTotal
            productsInCart = {productsInCart}
        />
        <Link to="/cart">show cart</Link>
    </div>
    )
}
export default Cart