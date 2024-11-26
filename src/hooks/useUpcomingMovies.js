import api from "../API/API";
import {useQuery} from "react-query";

const fetchUpcomingMovie = (page = 1) => {
	return api.get(`/movie/upcoming`, {params: {page}});
};

export const useUpcomingMovieQuery = (page) => {
	return useQuery({
		queryKey: ["movie-upcoming-movie", page],
		queryFn: () => fetchUpcomingMovie(page),
		select: (result) => result.data,
		keepPreviousData: true,
	})
}