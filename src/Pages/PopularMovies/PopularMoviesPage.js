import React from 'react';
import "../container.css"
import MovieCard from "../../Components/MovieCard/MovieCard";
import {Alert} from "react-bootstrap";
import {usePopularMovieQuery} from "../../hooks/usePopularMovie";
import {useSearchParams} from "react-router-dom";
import {useSearchMovieQuery} from "../../hooks/useSearchMovie";

const PopularMoviesPage = () => {
	const {data, isError, error, isLoading} = usePopularMovieQuery();
	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <Alert>{error.message}</Alert>;
	
	return (
		<div className="container">
			{data?.results.map((movie, index) => (<MovieCard className="container-item" movie={movie} key={index}/>))}
		</div>
	);
};

export default PopularMoviesPage;