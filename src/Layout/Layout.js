import React from 'react';
import "./Layout.css"
import {Outlet, useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {useState} from "react";

const Layout = () => {
	const navigate = useNavigate();
	const [keyword, setKeyword] = useState("");
	
	const searchMovie = (event, keyword) => {
		event.preventDefault();
		setKeyword(event.target.value);
		console.log(keyword);
		navigate(`/movie?q=${keyword}`);
	}
	
	return (
		<>
			<div className="navbar">
				<Link to="/">
					<img width={100} src="https://i0.wp.com/storyfactory.uk/wp-content/uploads/2020/01/netflix-logo-print_cmyk-e1578131919200.jpg?ssl=1" alt="logo"/>
				</Link>
				<div className="nav-item">
					<ul className="nav-item-ul">
						<Link to="/" className="Link">Home</Link>
						<Link to="/movies/popular_movies" className="Link">Popular Movies</Link>
						<Link to="/movies/upcoming_movies" className="Link">Upcoming Movies</Link>
						<Link to="/movies/top_rated_movies" className="Link">Top Rated Movies</Link>
						<Link to="/movies/now_playing_movies" className="Link">Now Playing Movies</Link>
					</ul>
					<input type="text" placeholder="Enter a movie" value={keyword} onChange={searchMovie}/>
				</div>
			</div>
			<Outlet/>
		</>
	);
};

export default Layout;