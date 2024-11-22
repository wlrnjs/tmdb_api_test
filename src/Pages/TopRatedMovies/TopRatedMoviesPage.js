import React from 'react';
import "../container.css"
import MovieCard from "../../Components/MovieCard/MovieCard";
import {useTopRatedMovieQuery} from "../../hooks/useTopRatedMovieSlider";
import {Alert} from "react-bootstrap";

const TopRatedMoviesPage = () => {
	const {data, isError, error, isLoading} = useTopRatedMovieQuery();
	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <Alert>{error.message}</Alert>;
	
	return (
		<div className="container">
			{data?.results.map((movie, index) => (<MovieCard className="container-item" movie={movie} key={index}/>))}
		</div>
	);
};

export default TopRatedMoviesPage;