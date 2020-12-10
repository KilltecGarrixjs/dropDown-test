import "./App.css";
import { Nav, NavItem } from "./components/Nav";
import Halcyon from "./components/Halcyon";
import "./components/Nav.css";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

function App() {
	return (
		<div className='container-wrapper'>
			<Nav>
				{/* <NavItem icon={<i class='fas fa-plus'></i>} />
				<NavItem icon={<i class='far fa-bell'></i>} />
				<NavItem icon={<i class='far fa-comment-dots'></i>} /> */}

				<NavItem icon={<i className='fas fa-bars'></i>}>
					<DropdownMenu />
				</NavItem>
			</Nav>
			<div className='wrapper'>
				<Halcyon />
			</div>
		</div>
	);
}
function DropdownMenu() {
	const [isSubOpened, setIsSubOpened] = useState(false);

	function DropdownItem(props) {
		return (
			<a
				href='#'
				className='menu-item'
				onClick={() => props.goToMenu && setIsSubOpened(!isSubOpened)}
			>
				{!!props.leftIcon && <span className='icon-button'>{props.leftIcon}</span>}
				{props.children}
				{!!props.rightIcon && <span className='icon-button'>{props.rightIcon}</span>}
			</a>
		);
	}

	return (
		<div className='dropdown'>
			<div className='menu'>
				<DropdownItem>
					<p className='dropDownLeft'>My Profile</p>
				</DropdownItem>

				<DropdownItem
					className='leftIcons'
					leftIcon={<i className={`fas ${isSubOpened ? "fa-caret-left" : "fa-cog"}`}></i>}
					goToMenu='settings'
				>
					<p className='dropDownLeft'>Settings</p>
				</DropdownItem>
			</div>
			{isSubOpened && (
				<div className='menu'>
					<DropdownItem>Settings</DropdownItem>
					<DropdownItem>Settings</DropdownItem>
					<DropdownItem>Settings</DropdownItem>
					<DropdownItem>Settings</DropdownItem>
					<DropdownItem>Settings</DropdownItem>
				</div>
			)}
		</div>
	);
}

export default App;
