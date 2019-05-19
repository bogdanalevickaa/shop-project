import React from 'react';

const CartProductListItem = ({
    product,
    productCount,
}) =>{
    return(
        <div>
            <span>{product.name}</span>: <span>{productCount}</span>
        </div>
    )
}
export default CartProductListItem;