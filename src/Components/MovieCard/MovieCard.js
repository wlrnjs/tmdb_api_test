import React from "react";
import "./MovieCard.css";
import {Badge} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useGenreQuery} from "../../hooks/useGenre";

const MovieCard = ({movie}) => {
	const navigate = useNavigate();
	const {data: genreData} = useGenreQuery();
	
	const goToMovie = (id) => {
		navigate(`/movies/${id}`);
	}
	
	const showGenres = (genreId) => {
		if (!genreId) return [];
		const genreNameList = genreId?.map((id) => {
			const genreObj = genreData?.genres.find((genre) => genre.id === id);
			return genreObj?.name || 'Unknown';
		})
		return genreNameList
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
					<div className="movie-detail-badge-div">
						{showGenres(movie.genre_ids).map((genre, index) => (
							<Badge className="movie-detail-badge" bg="danger" key={index}>
								{genre}
							</Badge>
						))}
					</div>
					<div className="movie-card-item" >
						<p>{movie?.vote_average}</p>
						<p>{movie?.popularity}</p>
						<p>
							{movie?.adult ? (
								<img className="movieCardImg" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFXmBxi-1UnU4viWo98mffvGP1P77sNakwg&s' alt="" />
							) : (
								<img className="movieCardImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrB4t_6EMaTKTb0EbF5yTmck6tOfZGxZg6Pg&s" alt="" />
							)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;