import React from 'react'
import './CartProductListItemExtended.css'
import ProductQuantity from '../Quantity/ProductQuantity';


const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity
}) => (
    <div>       
        <div className="cart-product-list-item-description">
            <div className="row">
                <div className="col-lg-3">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="col-lg-9">
                    <p className="cart-extended-name">
                        <span> {product.name} </span> 
                    </p>
                    <p className="cart-extended-price">
                         Price for one item: <span className="bold">$ {product.price} </span> 
                    </p>
                    <ProductQuantity
                        productCount={productCount}
                        onDecrementClick={() => changeProductQuantity(product.id,productCount-1)}
                        onIncrementClick={() => changeProductQuantity(product.id,productCount+1)}
                    />
                    <p className="cart-extended-count">
                         Selected quantity: <span className="bold"> {productCount} </span> 
                         
                    </p>
                    <p className="cart-extended-sum">
                         Sum for this item: <span className="bold sum-price">$ {(product.price * productCount)} </span> 
                    </p>
                    <button onClick ={()=> removeProductFromCart(product.id)}>Delete product</button>
                </div>
            </div>
        </div>
    </div>
)

export default CartProductListItemExtended;

