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