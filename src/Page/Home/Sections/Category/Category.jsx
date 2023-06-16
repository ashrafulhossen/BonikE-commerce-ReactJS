// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Category.css";

const Category = () => {
	const [allCategory, setAllCategory] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const res = await fetch("./category.json");
			const data = await res.json();
			setAllCategory(data);
		};
		loadData();
	});

	console.log(allCategory);

	return (
		<div className="category">
			<ul>
				{allCategory.length > 0 &&
					allCategory.map((category) => (
						<li key={category.id}>
							<button>
								<img
									src={category.cateImg}
									alt={category.cateName}
								/>
								<p>{category.cateName}</p>
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};

export default Category;
