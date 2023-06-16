import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./Page/Home/Home/Home";
import "./index.css";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [{ path: "/", element: <Home /> }],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
