import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item-container">
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="collection-footer-container">
				<span className="name-container">{name}</span>
				<span className="price-container">{price}</span>
			</div>
		</div>
	);
};

export default CollectionItem;
