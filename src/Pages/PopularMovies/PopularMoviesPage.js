import React, { useState } from "react";
import "../container.css";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { Alert } from "react-bootstrap";
import { usePopularMovieQuery } from "../../hooks/usePopularMovie";
import MovieSearchBox from "../../Common/MovieSearchBox";
import ReactPaginate from 'react-paginate';

const PopularMoviesPage = () => {
	const [sortedMovies, setSortedMovies] = useState([]);
	const [page, setPage] = useState(1);
	
	const {data, isError, error, isLoading} = usePopularMovieQuery(page);
	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <Alert>{error.message}</Alert>;
	
	const handlePageClick = () => {
		setPage(page + 1);
	}
	
	return (
		<>
		<div className="MoviePage">
			<MovieSearchBox data={data} onSort={setSortedMovies}/>
			<div className="container">
				{(sortedMovies.length > 0 ? sortedMovies : data?.results).map((movie, index) => (
					<MovieCard className="container-item" movie={movie} key={index}/>
				))}
			</div>
		</div>
	<div className="react-paginate">
		<ReactPaginate
			nextLabel="next >"
			onPageChange={handlePageClick}
			pageRangeDisplayed={3}
			marginPagesDisplayed={2}
			pageCount={data?.total_pages || 0}
			previousLabel="< previous"
			pageClassName="page-item"
			pageLinkClassName="page-link"
			previousClassName="page-item"
			previousLinkClassName="page-link"
			nextClassName="page-item"
			nextLinkClassName="page-link"
			breakLabel="..."
			breakClassName="page-item"
			breakLinkClassName="page-link"
			containerClassName="pagination"
			activeClassName="active"
			renderOnZeroPageCount={null}
			forcePage={page - 1}
		/>
	</div>
	</>
)
	;
};

export default PopularMoviesPage;