import React from 'react';
import '../../Header/Cart/cart.css'
import CartTotal from '../../../features/Cart/CartTotal'
import CartProductList from '../../../features/Cart/CartProductList';
import CartProductListItemExtended from '../../../features/Cart/CartProductListItemExtended';


const CartPage = ({
    productsInCart,
    removeProductFromCart,
 }) => {
    return(
    <div>
        <h1 className="title-page">Cart Page</h1>
        <div className="cart text-center">
            <CartProductList
                productsInCart = {productsInCart}
                CartItemComponent = {CartProductListItemExtended}
                removeProductFromCart={removeProductFromCart}
            />
            <CartTotal
                productsInCart = {productsInCart}
            />
        </div>
    </div>
    )
}
export default CartPage;