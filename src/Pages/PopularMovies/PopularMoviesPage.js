import React from 'react';
import "../container.css"
import MovieCard from "../../Components/MovieCard/MovieCard";
import {Alert} from "react-bootstrap";
import {usePopularMovieQuery} from "../../hooks/usePopularMovie";
import MovieSearchBox from "../../Common/MovieSearchBox";

const PopularMoviesPage = () => {
	const {data, isError, error, isLoading} = usePopularMovieQuery();
	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <Alert>{error.message}</Alert>;
	
	return (
		<div className="MoviePage">
			<MovieSearchBox/>
			<div className="container">
				{data?.results.map((movie, index) => (<MovieCard className="container-item" movie={movie} key={index}/>))}
			</div>
		</div>
	);
};

export default PopularMoviesPage;