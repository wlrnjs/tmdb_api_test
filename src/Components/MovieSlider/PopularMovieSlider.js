import React from 'react';
import {usePopularMovieQuery} from "../../hooks/usePopularMovie";
import {Alert} from "react-bootstrap";
import MovieSlider from "../../Common/MovieSlider";
import {responsive} from "../../Common/responsive";

const PopularMovieSlider = () => {
	const {data, isLoading, isError, error} = usePopularMovieQuery();
	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <Alert variant="danger">{error.message}</Alert>
	
	return (
		<div className="popular-movies">
			<MovieSlider movies={data.results} responsive={responsive} title='Top 10 Popular Movies' />
		</div>
	);
};

export default PopularMovieSlider;