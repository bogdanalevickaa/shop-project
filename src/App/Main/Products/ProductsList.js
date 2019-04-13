import React from 'react'
import ProductListItem from './ProductListItem';

const ProductsList = () => {
    return(
        <div>
            <h1 className="title-page">Products List</h1>
            <div className="row">
                <div className="col-lg-6">
                    <ProductListItem
                        name="iPhone 7"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                        name="iPhone X"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                        name="iPhone 8"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                        name="iPhone 8 plus"
                    />
                </div>
            </div>
        </div>
    )
}
export default ProductsList;