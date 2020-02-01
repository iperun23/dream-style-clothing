import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
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
			<CustomButton
				className="add-to-cart-button"
				inverted
				onClick={() => addItem(item)}
			>
				Add to cart
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
