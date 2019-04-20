import React, {Component} from 'react'
import PropTypes from 'prop-types'
import "./ProductListItem.css"


class ProductListItem extends Component{
    render(){
        return(
            <div className="product-list-item">
            <div className="product-image">
                <img src={this.props.image} alt=""/>
            </div>
                <h2 className="product-title">{this.props.name}</h2>
                <div className="product-description">{this.props.description}</div>
                <div className="product-features">Tupe: {this.props.type}</div>
                <div className="product-features">Capacity: {this.props.capacity} Gb</div>
                <div className="product-quantity">
                    <button>-</button>
                    <input tupe="text" value="1"/>
                    <button>+</button>
                </div>
                <div className="product-price">$ {this.props.price}</div>
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
// ProductListItem.propTypes = {
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     capacity : PropTypes.number.isRequired,
//     price: PropTypes.number.isRequired,
// }
// ProductListItem.defaultProps = {
//     description: "No description",
//     type:"phone",
// }

export default ProductListItem