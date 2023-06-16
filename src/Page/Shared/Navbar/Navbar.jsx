// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaChevronDown, FaTable } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="container">
				<div>
					<div className="category">
						<span>
							<FaTable /> <span>Category</span>
						</span>
						<FaChevronDown />
					</div>
				</div>
				<ul className="menubar">
					<li>
						<NavLink
							to={"/"}
							className={({ isActive }) =>
								`navlink ${isActive && "active-navlink"}`
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/pages"}
							className={({ isActive }) =>
								`navlink ${isActive && "active-navlink"}`
							}
						>
							Pages
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/userAccount"}
							className={({ isActive }) =>
								`navlink ${isActive && "active-navlink"}`
							}
						>
							User Account
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/vendorAccount"}
							className={({ isActive }) =>
								`navlink ${isActive && "active-navlink"}`
							}
						>
							Vendor Account
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/trackOrder"}
							className={({ isActive }) =>
								`navlink ${isActive && "active-navlink"}`
							}
						>
							Track My Order
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/contact"}
							className={({ isActive }) =>
								`navlink ${isActive && "active-navlink"}`
							}
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
