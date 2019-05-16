import React, {Component} from 'react'
import PropTypes from 'prop-types'
import "./ProductListItem.css"


class ProductListItem extends Component{
    state = {
        productCount:1
    }

    onIncrementClick () {
        this.setState((prevState)=>({
            productCount: prevState.productCount + 1
        }))
    }
    onDecrementClick () {
        this.setState((prevState)=>({
            productCount: prevState.productCount - 1
        }))
    }
    renderProductQuantity (){
        console.log(this)
        return(
            <div className="product-quantity">
                <button 
                    onClick={()=>this.onDecrementClick()}
                    disabled={this.state.productCount <= 1}
                >-
                </button>
                <input tupe="text" value={this.state.productCount} readOnly/>
                <button 
                    onClick={()=>this.onIncrementClick()}
                    disabled={this.state.productCount >= 10}
                >+
                </button>
            </div>
        )
    }
    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        capacity : PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
    }
    render(){
        const{
            id,
            image,
            name,
            description = "No description",
            type = "phone",
            capacity,
            price,
            addProductToCart,
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
                {this.renderProductQuantity()}
                <div className="product-price">$ {price}</div>
                <button 
                    className="btn btn-add-to-cart"
                    onClick={() => addProductToCart=(id,this.state.productCount)}
                    >Add to cart</button>
            </div>
        )
    }
}

export default ProductListItem