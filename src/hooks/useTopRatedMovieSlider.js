import api from "../API/API";
import {useQuery} from "react-query";

const fetchTopRatedMovie = () => {
	return api.get(`/movie/top_rated`);
}

export const useTopRatedMovieQuery = () => {
	return useQuery({
		queryKey: ["movie-top-rated"],
		queryFn: fetchTopRatedMovie,
		select: (result) => result.data,
	})
}