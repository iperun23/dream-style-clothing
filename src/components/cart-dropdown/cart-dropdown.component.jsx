import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems }) => {
	console.log("TCL: CartDropDown -> cartItems", cartItems);
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items-container"></div>
			<CustomButton className="cart-dropdown-button">
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
