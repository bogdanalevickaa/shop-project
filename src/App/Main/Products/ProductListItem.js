import React from 'react'
import "./ProductListItem.css"


const ProductListItem = (props) =>{
    console.log(props)
    return(
        <div className="product-list-item">
            <h2 className="product-title">{props.name}</h2>
            <div className="product-description">{props.description}</div>
            <div className="product-features">Tupe: {props.type}</div>
            <div className="product-features">Capacity: {props.capacity} Gb</div>
            <div className="product-price">$ {props.price}</div>
            <button className="btn btn-add-to-cart">Add to cart</button>
        </div>
    )
}
export default ProductListItem