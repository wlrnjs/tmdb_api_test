import React from "react";
import "./MovieCard.css";
import {Badge} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const MovieCard = ({movie}) => {
	const navigate = useNavigate();
	
	const goToMovie = (id) => {
		navigate(`/movies/${id}`);
	}
	
	return (
		<div
			style={{
				backgroundImage: `url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path})`,
			}}
			className="movie-card"
		>
			<div className="overlay" onClick={() => goToMovie(movie.id)}>
				<img
					src={`https://media.themoviedb.org/t/p/w533_and_h300_bestv2${movie.backdrop_path}`}
					alt="movie-img"
					className="overlay-img"
				/>
				<h1>{movie.title}</h1>
				<div className="movie-detail">
					<p>
						{movie.genre_ids.map((genre, index) => (
							<Badge bg="danger" key={index}>
								{genre}
							</Badge>
						))}
					</p>
					<div className="movie-card-item" >
						<p>{movie?.vote_average}</p>
						<p>{movie?.popularity}</p>
						<p>
							{movie?.adult ? (
								<img className="movieCardImg" src='https://i.namu.wiki/i/Rot9rfHqZdl47HpDeWKRl6-SFH8YcraZN1kHjzyzvOK1Rx2Zbe7T5U0MmnzYsLP2Tt6nIIx-3Ilp-b-FKqAjrQ.svg' alt="" />
							) : (
								<img className="movieCardImg" src="https://i.namu.wiki/i/4rqHeSQ7TkE85vF3Vlnz59QUtkq5cE095mHuoGagn8GC1uAic4hrujblFA6fJU1zbqNKuu_5AVw01CRnVQsXMQ.svg" alt="" />
							)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;