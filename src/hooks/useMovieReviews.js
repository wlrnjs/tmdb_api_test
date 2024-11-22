import api from "../API/API";
import {useQuery} from "react-query";

const fetchMovieReview = (movieId) => {
	return api.get(`/movie/${movieId}/reviews`)
}

export const useMovieReviewQuery = (movieId) => {
	return useQuery({
		queryKey: ['movie-review', movieId],
		queryFn: () => fetchMovieReview(movieId),
		select: (result) => result.data
	})
}