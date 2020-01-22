import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
);

export const selectCollectionsForOverviewPreview = createSelector(
	[selectCollections],
	collections =>
		collections ? Object.keys(collections).map(key => collections[key]) : []
);
