import api from "../API/API";
import {useQuery} from "react-query";

const fetchPopularMovie = () => {
	return api.get(`/movie/popular`);
}

export const usePopularMovieQuery = () => {
	return useQuery({
		queryKey: ["movie-popular"],
		queryFn: fetchPopularMovie,
		select: (result) => result.data,
	})
}