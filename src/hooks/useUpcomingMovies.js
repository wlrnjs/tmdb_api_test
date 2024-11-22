import api from "../API/API";
import {useQuery} from "react-query";

const fetchUpcomingMovie = () => {
	return api.get(`/movie/upcoming`);
}

export const useUpcomingMovieQuery = () => {
	return useQuery({
		queryKey: ["movie-upcoming-movie"],
		queryFn: fetchUpcomingMovie,
		select: (result) => result.data,
	})
}