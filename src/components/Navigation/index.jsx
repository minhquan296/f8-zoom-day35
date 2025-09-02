import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const NAVIGATION_LIST = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Counter",
		path: "/counter",
	},
	{
		title: "TodoList",
		path: "/todo",
	},
	{
		title: "Profile",
		path: "/profile",
	},
	{
		title: "Weather",
		path: "/weather",
	},
	{
		title: "Product",
		path: "/products",
	},
	{
		title: "Comment",
		path: "/comments",
	},
	{
		title: "Buttons",
		path: "/buttons",
	},
];

const Navigation = () => {
	const [activeNav, setActiveNav] = useState("Home");

	return (
		<div className="bg-gray-100 flex flex-col items-center h-[100vh] overflow-y-scroll p-6">
			<div className="flex gap-8 mt-10">
				{NAVIGATION_LIST.map((nav) => {
					return (
						<NavLink
							key={nav.title}
							to={nav.path}
							className={`font-bold text-gray-600 text-2xl hover:underline ${
								activeNav === nav.title ? "underline" : ""
							}`}
							onClick={() => setActiveNav(nav.title)}
						>
							{nav.title}
						</NavLink>
					);
				})}
			</div>
			<div className="mt-[100px]">
				<Outlet />
			</div>
		</div>
	);
};
export default Navigation;
