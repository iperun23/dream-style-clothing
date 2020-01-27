import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import { selectCartHidden } from "../../redux/cart/cart.selectors";

import "./header.styles.scss";

const Header = ({ hidden }) => {
	return (
		<div className="header">
			<Link to="/" className="link-container">
				Dream Style Clothing
			</Link>
			<div className="options-container">
				<Link to="/shop" className="option-link">
					SHOP
				</Link>
				<Link to="/shop" className="option-link">
					CONTACT
				</Link>
				<Link to="/" className="option-link">
					SIGN OUT
				</Link>
				<Link to="/signin" className="option-link">
					SIGN IN
				</Link>
				<CartIcon />
				{hidden ? null : <CartDropDown />}
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
