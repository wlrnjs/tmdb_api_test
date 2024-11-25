import React from "react";
import ReactPaginate from "react-paginate";


const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
	const pageCount = Math.ceil(totalItems / itemsPerPage); // 총 페이지 수 계산
	
	return (
		<ReactPaginate
			nextLabel="next >"
			onPageChange={onPageChange}
			pageRangeDisplayed={3}
			marginPagesDisplayed={2}
			pageCount={pageCount}
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
			forcePage={currentPage} // 현재 페이지 설정
		/>
	);
};

export default Pagination;