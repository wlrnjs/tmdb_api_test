import React, { useState } from "react";
import "../container.css";
import { useUpcomingMovieQuery } from "../../hooks/useUpcomingMovies";
import { Alert } from "react-bootstrap";
import MovieCard from "../../Components/MovieCard/MovieCard";
import MovieSearchBox from "../../Common/MovieSearchBox";
import PaginationComponent from "../../Components/Pagination/Pagination";

const UpcomingMoviesPage = () => {
	const { data, isLoading, isError, error } = useUpcomingMovieQuery();
	const [sortedMovies, setSortedMovies] = useState([]);
	const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 상태
	const moviesPerPage = 10; // 한 페이지에 보여줄 영화 수
	
	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <Alert>{error.message}</Alert>;
	
	// 보여줄 데이터 계산
	const movies = sortedMovies.length > 0 ? sortedMovies : data?.results || [];
	const currentMovies = movies.slice(
		currentPage * moviesPerPage,
		(currentPage + 1) * moviesPerPage
	); // 현재 페이지의 데이터
	
	const handlePageChange = ({ selected }) => {
		setCurrentPage(selected);
	};
	
	return (
		<>
		<div className="MoviePage">
			<MovieSearchBox data={data} onSort={setSortedMovies} />
			<div className="container">
				{currentMovies.map((movie, index) => (
					<MovieCard className="container-item" movie={movie} key={index} />
				))}
			</div>
		</div>
	<PaginationComponent
		totalItems={movies.length} // 총 영화 개수
		itemsPerPage={moviesPerPage} // 페이지당 영화 개수
		currentPage={currentPage} // 현재 페이지
		onPageChange={handlePageChange} // 페이지 변경 핸들러
	/>
		</>
	);
};

export default UpcomingMoviesPage;