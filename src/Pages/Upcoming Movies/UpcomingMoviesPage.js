import React from 'react';
import "../container.css"
import {useUpcomingMovieQuery} from "../../hooks/useUpcomingMovies";
import {Alert} from "react-bootstrap";
import MovieCard from "../../Components/MovieCard/MovieCard";
import MovieSearchBox from "../../Common/MovieSearchBox";

const UpcomingMoviesPage = () => {
	const {data, isLoading, isError, error} = useUpcomingMovieQuery();
	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <Alert>{error.message}</Alert>;
	console.log(data)
	
	return (
		<div className="MoviePage">
			<MovieSearchBox/>
			<div className="container">
				{data?.results.map((movie, index) => (<MovieCard className="container-item" movie={movie} key={index}/>))}
			</div>
		</div>
	
	)
		;
};

export default UpcomingMoviesPage;