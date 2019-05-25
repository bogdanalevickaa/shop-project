import React from 'react';

const ProductQuantity = ({
    productCount,
    onDecrementClick,
    onIncrementClick
}) =>{
    return(
        <div className="product-quantity">
            <button 
                onClick={()=>onDecrementClick()}
                disabled={productCount <= 1}
            >-
            </button>
            <input tupe="text" value={productCount} readOnly/>
            <button 
                onClick={()=>onIncrementClick()}
                disabled={productCount >= 10}
            >+
            </button>
        </div>
    )
}
export default ProductQuantity;