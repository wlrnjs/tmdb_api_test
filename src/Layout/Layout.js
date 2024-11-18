import React from 'react';
import "./Layout.css"
import {Outlet} from "react-router-dom";
import {Link} from "react-router-dom";

const Layout = () => {
	return (
		<>
			<div className="navbar">
				<Link to="/">
					<img width={100} src="https://i0.wp.com/storyfactory.uk/wp-content/uploads/2020/01/netflix-logo-print_cmyk-e1578131919200.jpg?ssl=1" alt="logo"/>
				</Link>
				<div className="nav-item">
					<ul className="nav-item-ul">
						<Link to="/" className="Link">Home</Link>
						<Link to="/" className="Link">All Movies</Link>
						<Link to="/" className="Link">Popular Movies</Link>
						<Link to="/" className="Link">Favorite Movies</Link>
						<Link to="/" className="Link">Upcoming Movies</Link>
					</ul>
					<input type="text" placeholder="ENTER"/>
				</div>
			</div>
			<Outlet/>
		</>
	);
};

export default Layout;