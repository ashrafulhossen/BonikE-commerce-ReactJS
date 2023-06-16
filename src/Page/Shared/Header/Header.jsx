// eslint-disable-next-line no-unused-vars
import React from "react";
import {
	FaEnvelope,
	FaFileInvoiceDollar,
	FaPhoneAlt,
	FaRegFlag,
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<ul>
					<li>
						<FaPhoneAlt />{" "}
						<span>+001234567890</span>
					</li>
					<li>
						<FaEnvelope />{" "}
						<span>example@gmail.com</span>
					</li>
				</ul>
				<ul>
					<li>Theme FAQ</li>
					<li>Need Helps</li>
					<li>
						<FaRegFlag />
						<span>EN</span>
					</li>
					<li>
						<FaFileInvoiceDollar />
						<span>USD</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
