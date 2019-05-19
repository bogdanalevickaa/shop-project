import React from 'react';
import {keys} from 'lodash'
import products, {getProductsMap} from '../../App/Main/Products/products'

const CartProductList = ({
    productsInCart,
    productsMap = getProductsMap(products)
}) =>{
    return(
        <div>
            {   //[1,2]
                keys(productsInCart).map((productId)=>(
                    <div key={productId}>
                        <span>{productsMap[productId].name}</span>: <span>{productsInCart[productId]}</span>
                    </div>
                )) 
            }
        </div>
    )
}
export default CartProductList;