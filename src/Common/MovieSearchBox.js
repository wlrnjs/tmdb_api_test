import React from "react";
import "./MovieSearchBox.css";
import { useMovieGenresListQuery } from "../hooks/MovieJengeList";
import { Alert } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const MovieSearchBox = ({ data, onSort }) => {
	const { data: genreList, isLoading, isError, error } = useMovieGenresListQuery();
	if (isLoading) return <p>Loading...</p>;
	if (isError) return <Alert variant="warning">Error: {error.message}</Alert>;
	
	const showMostPopular = () => {
		if (!data || !data.results) {
			return;
		}
		const sortedMovies = [...data.results].sort((a, b) => b.popularity - a.popularity);
		onSort(sortedMovies);
	};
	
	const showHighestRated = () => {
		if (!data || !data.results) {
			return;
		}
		const sortedMovies = [...data.results].sort((a, b) => b.vote_average - a.vote_average);
		onSort(sortedMovies);
	}
	
	const showHighestVotes = () => {
		if (!data || !data.results) {
			return;
		}
		const sortedMovies = [...data.results].sort((a, b) => b.vote_count - a.vote_count);
		onSort(sortedMovies);
	}
	
	const onGenreClick = (genreId) => {
		if (!data || !data.results) {
			return;
		}
		const filteredMovies = data.results.filter((movie) =>
		movie.genre_ids.includes(genreId)
		);
		onSort(filteredMovies)
	}
	
	return (
		<div className="movie-search-box">
			<div className="movie-search-box-input">
				<input type="text" placeholder="Search movies" />
			</div>
			<h4>Genres</h4>
			<div className="movie-search-box-button">
				{Array.isArray(genreList) && genreList.length > 0 ? (
					genreList.map((genre) => (
						<button key={genre.id} className="movie-search-box-button" onClick={() => onGenreClick(genre.id)}>
							{genre.name}
						</button>
					))
				) : (
					<p>No genres found</p>
				)}
			</div>
			<Dropdown className="dropdown">
				<Dropdown.Toggle variant="danger" id="dropdown-basic">
					Filter Movies
				</Dropdown.Toggle>
				
				<Dropdown.Menu>
					<Dropdown.Item onClick={showMostPopular}>Most Popular</Dropdown.Item>
					<Dropdown.Item onClick={showHighestRated}>Highest Rated</Dropdown.Item>
					<Dropdown.Item onClick={showHighestVotes}>Highest Votes</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default MovieSearchBox;