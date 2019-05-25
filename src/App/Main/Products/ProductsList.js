import React, { Component } from 'react';
import ProductListItem from './ProductListItem';

import products from './products';

class ProductsList extends Component {
    state = {
    products:[],
    visible:2
    }
    loadMore=()=> {
    this.setState((prevState) => ({
    visible: prevState.visible + 2,
    products: products.slice(0, this.state.visible)
    }))
    }
    componentDidMount() {
    this.setState((prevState) => ({
    visible: prevState.visible + 2,
    products: products.slice(0, this.state.visible)
    }))
    }



    render () {
    const { 
    addProductToCart, 
    isLiked, 
    addLikedButton, 
    removeLikedButton 
    } = this.props

    return(
        <div className="products-list">
            <h1 className="title-page text-center">Products List</h1>
                <div className="row">
                    {this.state.products.map(({ 
                        id, 
                        name, 
                        capacity, 
                        description, 
                        type, 
                        price, 
                        image 
                    }) => (
                    <div className="col-lg-6" key={id}>
                        <ProductListItem
                            name={name}
                            description={description}
                            type={type}
                            capacity={capacity}
                            price={price}
                            image={image}
                            addProductToCart={addProductToCart}
                            id={id}
                            isLiked={isLiked}
                            addLikedButton={addLikedButton}
                            removeLikedButton={removeLikedButton}
                        />
                    </div>
                    )
                    )}

                </div>
            <button onClick={()=>this.loadMore()}>Load More</button>
        </div>
    )
    }
}



export default ProductsList;