import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	selectCollectionsForOverviewPreview,
	selectIsCollectionFetching
} from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection-preview.component";

import WithSpinner from "../with-spinner/with-spinner.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForOverviewPreview,
	isLoading: selectIsCollectionFetching
});

export default connect(mapStateToProps)(WithSpinner(CollectionsOverview));
