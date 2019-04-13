import React from 'react'
import ProductListItem from './ProductListItem';
import products from './products';

const ProductsList = () => {
    return(
        <div>
            <h1 className="title-page">Products List</h1>
            <div className="row">
            {
                products.map((product)=>{
                    return(
                        <div className="col-lg-6">
                            <ProductListItem
                                name={product.name}
                                description={product.description}
                                type={product.type}
                                capacity={product.capacity}
                                price={product.price}
                            />
                        </div>
                    )
                })
            }
                {/* <div className="col-lg-6">
                    <ProductListItem
                        name="iPhone 7"
                        description="This is iPhone 7"
                        type="phone"
                        capacity="256"
                        price="800"
                    />
                </div> */}
            </div>
        </div>
    )
}
export default ProductsList;