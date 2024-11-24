import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/Homepage/HomePage";
import MovieDetailPage from "./Pages/MovieDetailPage/MovieDetailPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import PopularMoviesPage from "./Pages/PopularMovies/PopularMoviesPage";
import UpcomingMoviesPage from "./Pages/Upcoming Movies/UpcomingMoviesPage";
import NowPlayingMoviesPage from "./Pages/NowPlayingMovies/NowPlayingMoviesPage";
import TopRatedMoviesPage from "./Pages/TopRatedMovies/TopRatedMoviesPage";
import MoviePage from "./Pages/MoviePage/MoviePage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout/>}>
				<Route index element={<HomePage/>}/>
				<Route path="/movies">
					<Route index element={<MoviePage/>}/>
					<Route path="popular_movies" element={<PopularMoviesPage/>}/>
					<Route path="upcoming_movies" element={<UpcomingMoviesPage/>}/>
					<Route path="now_playing_movies" element={<NowPlayingMoviesPage/>}/>
					<Route path="top_rated_movies" element={<TopRatedMoviesPage/>}/>
					<Route path=":id" element={<MovieDetailPage/>}/>
				</Route>
			</Route>
			
			<Route path="*" element={<NotFoundPage/>}/>
		</Routes>
	);
}

export default App;
