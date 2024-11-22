import React from 'react';
import "./MovieDetailPage.css"
import {useMovieDetailsQuery} from "../../hooks/useMovieDetail";
import {Alert} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useGenreQuery} from "../../hooks/useGenre";
import {useMovieActorQuery} from "../../hooks/useMovieActor";
import ActorCard from "../../Components/ActorCard/ActorCard";
import {useMovieReviewQuery} from "../../hooks/useMovieReviews";
import ReviewsCard from "../../Components/ReviewsCard/ReviewsCard";
import {useRecommendMoviesQuery} from "../../hooks/useRecommendMovies";
import MovieCard from "../../Components/MovieCard/MovieCard";
import {useMovieVideoQuery} from "../../hooks/useMovieVideos";
import MovieYoutubeModal from "../../Common/MovieYoutubeModal";

const MovieDetailPage = () => {
	const {id} = useParams();
	const {data, isError, error, isLoading} = useMovieDetailsQuery(id);
	const {data: reviewsData} = useMovieReviewQuery(id);
	const {data: genreData} = useGenreQuery();
	const {data: actorData} = useMovieActorQuery(id);
	const {data: movieRecommend} = useRecommendMoviesQuery(id);
	const {data: movieVideo} = useMovieVideoQuery(id);
	
	if (isError) return <Alert variant="danger">{error.message}</Alert>
	if (isLoading) return <h1>Loading...</h1>
	
	const showGenres = (genreId) => {
		if (!genreId) return [];
		const genreNameList = genreId?.map((id) => {
			const genreObj = genreData?.genres.find((genre) => genre.id === id);
			return genreObj?.name || 'Unknown';
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
						<p>
							{data?.adult ? (
								<img style={{width: "22px", borderRadius: "10px"}} className="movieCardImg"
								     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFXmBxi-1UnU4viWo98mffvGP1P77sNakwg&s'
								     alt=""/>
							) : (
								<img style={{width: "25px", borderRadius: "10px"}} className="movieCardImg"
								     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrB4t_6EMaTKTb0EbF5yTmck6tOfZGxZg6Pg&s"
								     alt=""/>
							)}
						</p>
						<p>{`Runtime : ${showRuntime(data?.runtime)}`}</p>
						<p>{`Language : ${data?.spoken_languages?.[0]?.english_name || 'Unknown'}`}</p>
						<p>{`Genre: ${showGenres(data?.genres.map((genre) => genre.id)).join(', ')}`}</p>
						<p>{`Popularity : ${data?.popularity}`}</p>
					</div>
					<p>{`${data?.overview}`}</p>
					<MovieYoutubeModal id={movieVideo?.results?.length} />
				</div>
			</div>
			<hr/>
			<p style={{textAlign: "center"}}>Actor</p>
			<div className="movie-detail-page-actor">
				<div className="movie-actor">
					{actorData?.cast.slice(0, 10).map((actor, index) => (
						<ActorCard key={index} profile={actor.profile_path} name={actor.name} character={actor.character}/>
					))}
				</div>
			</div>
			<hr/>
			<p style={{textAlign: "center"}}>Reviews</p>
			<div className="movie-detail-page-reviews">
				<div className="reviews">
					{reviewsData?.results.map((result, index) => (
						<ReviewsCard key={index} userName={result.author_details.username} create={result.created_at}
						             review={result.content}/>
					))}
				</div>
			</div>
			<hr/>
			<h2 style={{textAlign:"center"}}>Recommended Movies</h2>
			<div className="movie-recommend">
				{movieRecommend?.results.map((result, index) => (
					<MovieCard movie={result} key={index}/>
				))}
			</div>
		</>
	);
};

export default MovieDetailPage;