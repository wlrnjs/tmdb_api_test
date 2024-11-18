import React from 'react';
import {useTopRatedMovieQuery} from "../../hooks/useTopRatedMovieSlider";
import {Alert} from "react-bootstrap";
import MovieSlider from "../../Common/MovieSlider";
import {responsive} from "../../Common/responsive";

const TopRatedMovieSlider = () => {
	const {data, isError, isLoading, error} = useTopRatedMovieQuery();
	if (isError) return <Alert variant="danger">{error.message}</Alert>
	if (isLoading) return <h1>Loading...</h1>
	
	return (
		<div className="top-rated-movies">
			<MovieSlider movies={data.results} responsive={responsive} title="Top 10 Rated Movies" />
		</div>
	);
};

export default TopRatedMovieSlider;