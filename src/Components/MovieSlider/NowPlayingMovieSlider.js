import React from 'react';
import {useNowPlayingMovieQuery} from "../../hooks/useNowPlayingMovie";
import {Alert} from "react-bootstrap";
import MovieSlider from "../../Common/MovieSlider";
import {responsive} from "../../Common/responsive";

const NowPlayingMovieSlider = () => {
	const {data, isError, error, isLoading} = useNowPlayingMovieQuery();
	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <Alert>{error.message}</Alert>;
	
	return (
		<div>
			<MovieSlider movies={data.results} responsive={responsive} title="Now Playing Movies" />
		</div>
	);
};

export default NowPlayingMovieSlider;