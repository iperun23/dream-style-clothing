import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems }) => {
	console.log("TCL: CheckoutPage -> cartItems", cartItems);
	return (
		<div className="checkout-page-container">
			<div className="cheakout-page-header-container">
				<div className="checkout-page-header-block-container">
					<span>Product</span>
				</div>
				<div className="checkout-page-header-block-container">
					<span>Description</span>
				</div>
				<div className="checkout-page-header-block-container">
					<span>Quantity</span>
				</div>
				<div className="checkout-page-header-block-container">
					<span>Price</span>
				</div>
				<div className="checkout-page-header-block-container">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map(cartItem => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
		</div>
	);
};

const mapStatetoProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default connect(mapStatetoProps)(CheckoutPage);
