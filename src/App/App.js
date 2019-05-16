import React,{Component} from 'react'


import './../common/style/reset.css'
import './../common/style/base.css'

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

class App extends Component{
	state = {
		cartData:{
			totalProductCount:0,
			totalPrice:0,
		}
	}

	addProductToCart = (count,price) => {
		this.setState((prevState)=> ({
			cartData : {
				totalProductCount: prevState.cartData.totalProductCount + count,
				totalPrice:prevState.cartData.totalPrice + (price * count),
			}
		}))
	}
	
	render(){
		return(
			<div>
				<Header
				cartData={this.state.cartData}
				/>
				<Main
				addProductToCart={this.addProductToCart}
				/>
				<Footer/>
			</div>
		)
	}
}
export default App;