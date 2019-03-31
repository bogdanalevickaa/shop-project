import React from 'react'

const App = () =>{
	return(
		<div>
			<header className="header">
				<div className="conteiner">
					<div className="row">
						<div className="col-md-3">
							<div className="logo">
								<img src="img/logo.png" alt=""/>
							</div>
						</div>
						<div className="col-md-6">
							<div className="menu">
								<ul>
									<li><a href="">Home</a></li>
									<li><a href="">Product</a></li>
									<li><a href="">Payment</a></li>
									<li><a href="">Shipping</a></li>
								</ul>
							</div>
						</div>
						<div className="col-md-3">
							<div className="cart text-center">
								<div className="products-count">0</div>
								<div className="products-price">$500</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<main className="main">
				<div className="conteiner">
					<div className="row">
						<div className="col-md-3">
							Filter
						</div>
						<div className="col-md-9">
							Products List
						</div>
					</div>
				</div>
			</main>
			<footer className="Footer">
				Footer
			</footer>
		</div>
	)
}
export default App