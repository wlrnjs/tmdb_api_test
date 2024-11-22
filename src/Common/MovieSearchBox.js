import "./MovieSearchBox.css"
import {useMovieGenresListQuery} from "../hooks/MovieJengeList";
import {Alert} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

const MovieSearchBox = () => {
	const {data: genreList, isLoading, isError, error} = useMovieGenresListQuery();
	if (isLoading) return <p>Loading...</p>;
	if (isError) return <Alert>Error: {error.message}</Alert>;
	
	const showMostPopular = () => {
	
	}
	
	const showHighestRated = () => {
	
	}
	
	const showHighestVotes = () => {
	
	}
	
	return (
		<div className="movie-search-box">
			<div className="movie-search-box-input">
				<input type="text" placeholder="Search movies"/>
				<button>Search</button>
			</div>
			<h4>Genres</h4>
			<div className="movie-search-box-button">
				{Array.isArray(genreList) && genreList.length > 0 ? (
					genreList.map((genre) => (
						<button key={genre.id} className="movie-search-box-button">
							{genre.name}
						</button>
					))
				) : (
					<p>No genres found</p>
				)}
			</div>
			<Dropdown className="dropdown">
				<Dropdown.Toggle variant="danger" id="dropdown-basic">
					Dropdown Button
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