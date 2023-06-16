// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Page/Shared/Header/Header";
import Navbar from "../Page/Shared/Navbar/Navbar";
import Search from "../Page/Shared/Search/Search";

const Main = () => {
	return (
		<div>
			<div>
				<Header />
				<Search />
				<Navbar />
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default Main;
