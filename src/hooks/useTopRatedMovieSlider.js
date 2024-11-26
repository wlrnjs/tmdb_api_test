import api from "../API/API";
import {useQuery} from "react-query";

const fetchTopRatedMovie = (page) => {
	return api.get(`/movie/top_rated`, {params: {page}});
}

export const useTopRatedMovieQuery = (page) => {
	return useQuery({
		queryKey: ["movie-top-rated", page],
		queryFn: () => fetchTopRatedMovie(page),
		select: (result) => result.data,
		keepPreviousData: true,
	})
}