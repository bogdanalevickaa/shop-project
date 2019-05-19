import React from 'react';
import {keys} from 'lodash'
import products, {getProductsMap} from '../../App/Main/Products/products'
import CartProductListItem from './CartProductListItem'

const CartProductList = ({
    productsInCart,
    productsMap = getProductsMap(products),
    CartItemComponent = CartProductListItem,
    removeProductFromCart,
}) =>{
    return(
        <div>
            {   //[1,2]
                keys(productsInCart).map((productId)=>(
                    <CartItemComponent
                        product = {productsMap[productId]}
                        productCount = {productsInCart[productId]}
                        key = {productId}
                        removeProductFromCart={removeProductFromCart}
                    />
                )) 
            }
        </div>
    )
}
export default CartProductList;