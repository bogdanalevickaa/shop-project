import React from 'react'
import "./ProductListItem.css"


const ProductListItem = () =>{
    return(
        <div className="product-list-item">
            <h2 className="product-title">iPhone X</h2>
            <div className="product-description">This is iPhone X</div>
            <div className="product-features">Tupe: phone</div>
            <div className="product-features">Capacity: 64Gb</div>
            <div className="product-price">$ 600</div>
            <button className="btn btn-add-to-cart">Add to cart</button>
        </div>
    )
}
export default ProductListItem