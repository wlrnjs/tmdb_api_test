import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/Homepage/HomePage";
import MoviePage from "./Pages/MoviePage/MoviePage";
import MovieDetailPage from "./Pages/MovieDetailPage/MovieDetailPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout/>}>
				<Route index element={<HomePage/>}/>
				<Route path="/movies">
					<Route index element={<MoviePage/>}/>
					<Route path=":id" element={<MovieDetailPage/>}/>
					
				</Route>
			</Route>
			
			<Route path="*" element={<NotFoundPage/>}/>
		</Routes>
	);
}

export default App;
