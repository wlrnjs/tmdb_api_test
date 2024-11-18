import api from "../API/API";
import {useQuery} from "react-query";

const fetchMovieDetails = (id) => {
	return api.get(`/movie/${id}`)
}

export const useMovieDetailsQuery = (id) => {
	return useQuery({
		queryKey: ['movie-detail'],
		queryFn: () => fetchMovieDetails(id),
		select: (result) => result.data,
	})
}