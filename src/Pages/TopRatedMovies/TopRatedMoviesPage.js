import React, {useState} from "react";
import "../container.css";
import MovieCard from "../../Components/MovieCard/MovieCard";
import {useTopRatedMovieQuery} from "../../hooks/useTopRatedMovieSlider";
import {Alert} from "react-bootstrap";
import MovieSearchBox from "../../Common/MovieSearchBox";

const TopRatedMoviesPage = () => {
	const {data, isError, error, isLoading} = useTopRatedMovieQuery();
	const [sortedMovies, setSortedMovies] = useState([]);
	
	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <Alert>{error.message}</Alert>;
	
	return (
		<div className="MoviePage">
			<MovieSearchBox data={data} onSort={setSortedMovies}/>
			<div className="container">
				{(sortedMovies.length > 0 ? sortedMovies : data?.results).map((movie, index) => (
					<MovieCard className="container-item" movie={movie} key={index}/>
				))}
			</div>
		</div>
	);
};

export default TopRatedMoviesPage;