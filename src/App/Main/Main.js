import React from 'react'
import {Route} from 'react-router-dom'
import CartPage from './CartPage/CartPage'
import Payment from './Payment/Payment'
import Shipping from './Shipping/Shipping'
import ProductsList from './Products/ProductsList'

const Main = ({
	addProductToCart,
}) =>{
	return(
		<main className="main">
			<div className="conteiner">
				<div className="row">
					<div className="col-lg-3">
						Filter
					</div>
					<div className="col-lg-9">
						<Route exact path="/" render={()=>{
							return <ProductsList
								addProductToCart={addProductToCart}
							/>
						}}/>
						<Route path="/cart" component={CartPage}/>
						<Route path="/payment" component={Payment}/>
						<Route path="/shipping" component={Shipping}/>
					</div>
				</div>
			</div>
		</main>
	)
}
export default Main;