import React from 'react';
import {useUpcomingMovieQuery} from "../../hooks/useUpcomingMovies";
import {Alert} from "react-bootstrap";
import MovieCard from "../../Components/MovieCard/MovieCard";

const UpcomingMoviesPage = () => {
	const {data, isLoading, isError, error} = useUpcomingMovieQuery();
	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <Alert>{error.message}</Alert>;
	
	return (
		<div className="container">
			{data?.results.map((movie, index) => (<MovieCard className="container-item" movie={movie} key={index}/>))}
		</div>
	);
};

export default UpcomingMoviesPage;