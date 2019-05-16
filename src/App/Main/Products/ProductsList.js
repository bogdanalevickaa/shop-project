import React from 'react'
import ProductListItem from './ProductListItem';
import products from './products';

const ProductsList = ({
    addProductToCart,
}) => {
    return(
        <div>
            <h1 className="title-page">Products List</h1>
            <div className="row">
            {
                products.map(({
                    id,
                    image,
                    name,
                    description,
                    type,
                    capacity,
                    price
                })=>{
                    return(
                        <div className="col-lg-6" key={id}>
                            <ProductListItem
                                id={id}
                                image={image}
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                addProductToCart={addProductToCart}
                            />
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default ProductsList;