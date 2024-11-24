import React from "react";
import "./Layout.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
	const navigate = useNavigate();
	const [keyword, setKeyword] = useState("");
	
	const searchMovie = (event) => {
		event.preventDefault();
		navigate(`/movies?q=${keyword}`);
		setKeyword("");
	};
	
	return (
		<>
			<div className="navbar">
				<div className="navbar-left">
					<Link to="/">
						<img
							width={100}
							src="https://i0.wp.com/storyfactory.uk/wp-content/uploads/2020/01/netflix-logo-print_cmyk-e1578131919200.jpg?ssl=1"
							alt="logo"
						/>
					</Link>
					<ul className="nav-item-ul">
						<li>
							<Link to="/" className="Link">
								Home
							</Link>
						</li>
						<li>
							<Link to="/movies/popular_movies" className="Link">
								Popular Movies
							</Link>
						</li>
						<li>
							<Link to="/movies/upcoming_movies" className="Link">
								Upcoming Movies
							</Link>
						</li>
						<li>
							<Link to="/movies/top_rated_movies" className="Link">
								Top Rated Movies
							</Link>
						</li>
						<li>
							<Link to="/movies/now_playing_movies" className="Link">
								Now Playing Movies
							</Link>
						</li>
					</ul>
				</div>
				<div className="navbar-right">
					<form onSubmit={searchMovie}>
						<input
							type="text"
							placeholder="Enter a movie"
							value={keyword}
							onChange={(e) => setKeyword(e.target.value)}
						/>
					</form>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Layout;