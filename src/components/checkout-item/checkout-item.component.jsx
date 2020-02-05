import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item-container">
			<div className="checkout-item-image-container">
				<img src={imageUrl} alt="checkout item" />
			</div>
			<span className="checkout-item-text-container">{name}</span>
			<div className="checkout-item-quantity-container">
				<div>&#10094;</div>
				<span>{quantity}</span>
				<div>&#10095;</div>
			</div>
			<span className="checkout-item-text-container">{price}</span>
			<div className="checkout-item-remove-button-container">&#10005;</div>
		</div>
	);
};

export default connect(null)(CheckoutItem);
