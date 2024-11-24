import React, { useState } from "react";
import "../container.css";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { Alert } from "react-bootstrap";
import MovieSearchBox from "../../Common/MovieSearchBox";
import {useSearchParams} from "react-router-dom";
import {useSearchMovieQuery} from "../../hooks/useSearchMovie";

const PopularMoviesPage = () => {
	const [sortedMovies, setSortedMovies] = useState([]);
	const [query, setQuery] = useSearchParams();
	const keyword = query.get('q');
	
	const {data, isError, error, isLoading} = useSearchMovieQuery(keyword);
	console.log(data);
	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <Alert>{error.message}</Alert>;
	
	return (
		<div className="MoviePage">
			<MovieSearchBox data={data} onSort={setSortedMovies} />
			<div className="container">
				{(sortedMovies.length > 0 ? sortedMovies : data?.results).map((movie, index) => (
					<MovieCard className="container-item" movie={movie} key={index} />
				))}
			</div>
		</div>
	);
};

export default PopularMoviesPage;