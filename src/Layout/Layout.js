import React from 'react';
import "./LayOut.css"
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
						<Link to="/" className="Link">홈</Link>
						<Link to="/" className="Link">시리즈</Link>
						<Link to="/" className="Link">영화</Link>
						<Link to="/" className="Link">요즘 대세 콘텐츠</Link>
						<Link to="/" className="Link">내가 찜한 리스트</Link>
					</ul>
				</div>
				<div className="nav-search">
					<input type="text" placeholder="SEARCH"/>
					<button>SEARCH</button>
				</div>
			</div>
			<Outlet/>
		</>
	);
};

export default Layout;