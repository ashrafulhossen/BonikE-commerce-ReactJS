// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import "./Search.css";

const Search = () => {
	return (
		<div className="search">
			<div className="container flex-center">
				<h2>Bonik</h2>
				<div className="search-bar">
					<div>
						<FaSearch style={{fontSize: "20px"}} />
						<input
							type="text"
							placeholder="Search and hit enter...."
						/>
					</div>
					<p>All Category</p>
				</div>
				<ul>
					<li>
						<button className="flex-center">
							<FaUser />
						</button>
					</li>
					<li className="shopping-cart">
						<button className="flex-center">
							<FaShoppingBag />
						</button>
                        <p className="flex-center">0</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Search;
