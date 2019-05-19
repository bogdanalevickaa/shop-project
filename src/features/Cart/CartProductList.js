import React from 'react';
import {keys} from 'lodash'
import products, {getProductsMap} from '../../App/Main/Products/products'
import CartProductListItem from './CartProductListItem'

const CartProductList = ({
    productsInCart,
    productsMap = getProductsMap(products),
    CartItemComponent = CartProductListItem,
}) =>{
    return(
        <div>
            {   //[1,2]
                keys(productsInCart).map((productId)=>(
                    <CartItemComponent
                        product = {productsMap[productId]}
                        productCount = {productsInCart[productId]}
                        key = {productId}
                    />
                )) 
            }
        </div>
    )
}
export default CartProductList;