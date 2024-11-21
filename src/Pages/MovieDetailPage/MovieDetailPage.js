import React from 'react';
import "./MovieDetailPage.css"
import {useMovieDetailsQuery} from "../../hooks/useMovieDetail";
import {Alert} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useGenreQuery} from "../../hooks/useGenre";
import {useMovieActorQuery} from "../../hooks/useMovieActor";
import ActorCard from "../../Components/ActorCard/ActorCard";

const MovieDetailPage = () => {
	const {id} = useParams();
	const {data, isError, error, isLoading} = useMovieDetailsQuery(id);
	const {data: genreData} = useGenreQuery();
	const {data: actorData} = useMovieActorQuery(id);
	console.log(actorData);
	if (isError) return <Alert variant="danger">{error.message}</Alert>
	if (isLoading) return <h1>Loading...</h1>
	
	const showGenres = (genreId) => {
		if (!genreId) return [];
		const genreNameList = genreId?.map((id) => {
			const genreObj = genreData?.genres.find((genre) => genre.id === id);
			return genreObj.name;
		})
		return genreNameList
	}
	
	const showRuntime = (runtime) => {
		const hours = Math.floor(runtime / 60);
		const minutes = runtime % 60;
		return `${hours}h ${minutes}m`;
	};
	
	return (
		<>
			<div className="movie-detail-page">
				<img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt={data?.title}/>
				<div className="movie-detail-page-content">
					<h1>{`${data?.original_title}`}</h1>
					<div className="movie-detail-page-item">
						<p>{`Video : ${data?.video ? '1' : 'None'}`}</p>
						<p>{`Runtime : ${showRuntime(data?.runtime)}`}</p>
						<p>{`Language : ${data?.spoken_languages[0].english_name}`}</p>
						<p>{`Genre: ${showGenres(data?.genres.map((genre) => genre.id)).join(', ')}`}</p>
						<p>{`Popularity : ${data?.popularity}`}</p>
					</div>
					<p>{`${data?.overview}`}</p>
				</div>
			</div>
			<hr/>
			<div className="movie-detail-page-actor">
				<p className="movie-actor">
					{actorData?.cast.slice(0, 10).map((actor, index) => (
					<ActorCard key={index} profile={actor.profile_path} name={actor.name} character={actor.character} />
				))}
				</p>
			</div>
		</>
	);
};

export default MovieDetailPage;