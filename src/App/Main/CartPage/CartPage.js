import React from 'react';
import {keys} from 'lodash'
import '../../Header/Cart/cart.css'
import products, {getProductsMap} from '../../Main/Products/products'


const CartPage = ({
    productsInCart,
    productsMap = getProductsMap(products)
 }) => {
    return(
    <div>
        <h1 className="title-page">Cart Page</h1>
        <div className="cart text-center">
        {   //[1,2]
                keys(productsInCart).map((productId)=>(
                    <div key={productId}>
                        <span>{productsMap[productId].name}</span>: <span>{productsInCart[productId]}</span>: <span>{productsMap[productId].price}$</span>
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
        </div>
    </div>
    )
}
export default CartPage;