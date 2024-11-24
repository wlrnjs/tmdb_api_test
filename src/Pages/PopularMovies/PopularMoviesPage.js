import React, { useState } from "react";
import "../container.css";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { Alert } from "react-bootstrap";
import { usePopularMovieQuery } from "../../hooks/usePopularMovie";
import MovieSearchBox from "../../Common/MovieSearchBox";

const PopularMoviesPage = () => {
	const [sortedMovies, setSortedMovies] = useState([]);
	
	const {data, isError, error, isLoading} = usePopularMovieQuery();
	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <Alert>{error.message}</Alert>;
	
	return (
		<div className="MoviePage">
			<MovieSearchBox data={data} onSort={setSortedMovies} />
			<div className="container">
				{(sortedMovies.length > 0 ? sortedMovies : data?.results).map((movie, index) => (
					<MovieCard className="container-item" movie={movie} key={index} />
				))}
			</div>
		</div>
	);
};

export default PopularMoviesPage;