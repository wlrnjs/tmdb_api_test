import React from 'react';
import "./MoviSlider.css"
import Carousel from "react-multi-carousel";
import MovieCard from "../Components/MovieCard/MovieCard";

const MovieSlider = ({title, movies, responsive}) => {
	return (
		<div className="movie-slider">
			<h3>{title}</h3>
			<Carousel
				infinite={true}
				centerMode={true}
				itemClass="movie-slider p-1"
				containerClass="carousel-container"
				responsive={responsive}
			>
				{movies.map((movie, index) => (<MovieCard movie={movie} key={index}/>))}
			</Carousel>
		</div>
	);
};

export default MovieSlider;