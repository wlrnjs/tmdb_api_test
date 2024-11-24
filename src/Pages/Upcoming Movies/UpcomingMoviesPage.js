import React, { useState } from "react";
import "../container.css";
import { useUpcomingMovieQuery } from "../../hooks/useUpcomingMovies";
import { Alert } from "react-bootstrap";
import MovieCard from "../../Components/MovieCard/MovieCard";
import MovieSearchBox from "../../Common/MovieSearchBox";

const UpcomingMoviesPage = () => {
	const { data, isLoading, isError, error } = useUpcomingMovieQuery();
	const [sortedMovies, setSortedMovies] = useState([]);
	
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

export default UpcomingMoviesPage;