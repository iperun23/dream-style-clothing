import React from "react";
import { connect } from "react-redux";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionItem from "../../components/collection-item/collection-item.component";

import {
	selectCollection,
	selectIsCollectionsLoaded
} from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
	console.log("TCL: CollectionPage -> collection", collection);

	const { title, items } = collection;
	return (
		<div className="collection-page-container">
			<h2 className="collection-page-title">{title}</h2>
			<div className="collection-page-items-container">
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
	isLoading: !selectIsCollectionsLoaded(state)
});

export default connect(mapStateToProps)(WithSpinner(CollectionPage));
