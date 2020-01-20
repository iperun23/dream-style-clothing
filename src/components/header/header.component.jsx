import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
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
			</div>
		</div>
	);
};

export default Header;
