import React from 'react';
import "react-multi-carousel/lib/styles.css";
import "./HomePage.css"
import Banner from "../../Components/Banner/Banner";
import PopularMovieSlider from "../../Components/MovieSlider/PopularMovieSlider";
import TopRatedMovieSlider from "../../Components/MovieSlider/TopRatedMovieSlider";
import NowPlayingMovieSlider from "../../Components/MovieSlider/NowPlayingMovieSlider";

const HomePage = () => {
	return (
		<div>
			<Banner/>
			<PopularMovieSlider className="movie-slider"/>
			<TopRatedMovieSlider className="movie-slider"/>
			<NowPlayingMovieSlider className="movie-slider"/>
		</div>
	);
};

export default HomePage;