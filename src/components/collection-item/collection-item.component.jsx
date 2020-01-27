import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
	const { name, price, imageUrl } = item;

	return (
		<div className="collection-item-container">
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="collection-footer-container">
				<span className="name-container">{name}</span>
				<span className="price-container">{price}</span>
			</div>
			<CustomButton className="add-to-cart-button" inverted>
				Add to cart
			</CustomButton>
		</div>
	);
};

export default CollectionItem;
