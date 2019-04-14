import React from 'react'
import PropTypes from 'prop-types'
import "./ProductListItem.css"


const ProductListItem = ({
    name,
    description = "No description ...",
    type,
    capacity,
    price
}) =>{
    return(
        <div className="product-list-item">
            <h2 className="product-title">{name}</h2>
            <div className="product-description">{description}</div>
            <div className="product-features">Tupe: {type}</div>
            <div className="product-features">Capacity: {capacity} Gb</div>
            <div className="product-price">$ {price}</div>
            <button className="btn btn-add-to-cart">Add to cart</button>
        </div>
    )
}
ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    capacity : PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}
// ProductListItem.defaultProps = {
//     description: "No description",
//     type:"phone",
// }

export default ProductListItem