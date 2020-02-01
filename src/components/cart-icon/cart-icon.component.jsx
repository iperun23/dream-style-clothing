import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectcartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<div className="cart-icon-container" onClick={toggleCartHidden}>
			<ShoppingIconSVG className="cart-icon-shopping" />
			<span className="cart-icon-itemcount-container">{itemCount}</span>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
	itemCount: selectcartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
