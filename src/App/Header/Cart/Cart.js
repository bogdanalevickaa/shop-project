import React from 'react'
import {keys} from 'lodash'
import {Link} from 'react-router-dom'
import './cart.css'

import products from '../../Main/Products/products'

const productsMap = products.reduce((accObj,product)=>({
    ...accObj,
    [product.id]:product
}),{})

console.log(products)
console.log(productsMap)


 const Cart = ({
    productsInCart
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
        <div>
        Total : {
            keys(productsInCart).reduce((total,productId)=>{
                return (total + (productsInCart[productId] * productsMap[productId].price))
            },0)
        }$
        </div>
        <Link to="/cart">show cart</Link>
    </div>
    )
}
export default Cart