import api from "../API/API";
import {useQuery} from "react-query";

const fetchMovieActors = (movieId) => {
	return api.get(`/movie/${movieId}/credits`)
}

export const useMovieActorQuery = (movieId) => {
	return useQuery({
		queryKey: ["movie-actor", movieId],
		queryFn: () => fetchMovieActors(movieId),
		select: (result) => result.data,
	})
}