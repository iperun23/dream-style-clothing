import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, name, price } }) => {
	return (
		<div className="cart-item-container">
			<img className="cart-item-image" src={imageUrl} alt="cart-item" />
			<div className="cart-item-details">
				<span>{name}</span>
				<span>${price}</span>
			</div>
		</div>
	);
};

export default CartItem;
