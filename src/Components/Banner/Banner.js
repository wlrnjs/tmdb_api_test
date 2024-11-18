import React from 'react';
import "./Banner.css"
import {usePopularMovieQuery} from "../../hooks/usePopularMovie";
import {Alert} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Banner = () => {
	const Navigate = useNavigate();
	const {data, isLoading, isError, error} = usePopularMovieQuery();
	if (isError) return <Alert variant="danger">{error.message}</Alert>
	if (isLoading) return <h1>Loading...</h1>
	
	const goToMovieVideos = (movie_id) => {
		Navigate(`/movie/${movie_id}/videos`)
	}
	
	const goToMovie = (id) => {
		Navigate(`/movies/${id}`);
	}
	
	return (
		<div style={{
			backgroundImage:
				`url(` + `https://www.themoviedb.org/t/p/original${data?.results[0].backdrop_path}` +
				`)`,
		}}
		     className="banner"
		>
			<div className="banner-text-area">
				<h1>{data?.results[0].title}</h1>
				<p>{data?.results[0].overview}</p>
				<div className="banner-button">
					<button className="button-play" onClick={()=>goToMovieVideos(data.result.video)}>PLAY</button>
					<button className="button-detail" onClick={() => goToMovie(data.results[0].id)}>MOVIE DETAIL</button>
				</div>
			</div>
		
		</div>
	);
};

export default Banner;