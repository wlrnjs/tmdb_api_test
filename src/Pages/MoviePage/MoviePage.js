import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useSearchMovieQuery} from "../../hooks/useSearchMovie";
import MovieCard from "../../Components/MovieCard/MovieCard";

const MoviePage = () => {
	const [query, setQuery] = useSearchParams();
	const keyword = query.get('q');
	const {data: searchMovie} = useSearchMovieQuery({keyword});
	
	return (
		<div>
			{data?.results.map((movie, index) => <div key={index} lg={4} xs={12}><MovieCard movie={movie}/></div>)}
		</div>
	);
};

export default MoviePage;