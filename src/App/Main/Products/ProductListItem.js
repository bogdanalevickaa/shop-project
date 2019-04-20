import React, {Component} from 'react'
import PropTypes from 'prop-types'
import "./ProductListItem.css"


class ProductListItem extends Component{
    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        capacity : PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
    }
    render(){
        const{
            image,
            name,
            description = "No description",
            type = "phone",
            capacity,
            price,
        } = this.props
        return(
            <div className="product-list-item">
            <div className="product-image">
                <img src={image} alt=""/>
            </div>
                <h2 className="product-title">{name}</h2>
                <div className="product-description">{description}</div>
                <div className="product-features">Tupe: {type}</div>
                <div className="product-features">Capacity: {capacity} Gb</div>
                <div className="product-quantity">
                    <button>-</button>
                    <input tupe="text" value="1"/>
                    <button>+</button>
                </div>
                <div className="product-price">$ {price}</div>
                <button className="btn btn-add-to-cart">Add to cart</button>
            </div>
        )
    }
}

// const ProductListItem = ({
//     image,
//     name,
//     description,
//     type,
//     capacity,
//     price
// }) =>{
    
// }



export default ProductListItem