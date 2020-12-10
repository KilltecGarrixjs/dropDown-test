import React, { useState } from "react";
import "./Nav.css";
export const Nav = function (props) {
	return (
		<nav className='navbar'>
			<ul className='navbar-nav'>{props.children}</ul>
		</nav>
	);
};
export const NavItem = function (props) {
	const [open, setOpen] = useState(false);
	return (
		<li className='nav-item'>
			<a href='#' className='icon-button' onClick={() => setOpen(!open)}>
				{props.icon}
			</a>

			{open && props.children}
		</li>
	);
};
