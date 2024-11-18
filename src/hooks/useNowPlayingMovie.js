import api from "../API/API";
import {useQuery} from "react-query";

const fetchNowPlayingMovie = () => {
	return api.get(`/movie/now_playing`);
}

export const useNowPlayingMovieQuery = () => {
	return useQuery({
		queryKey: ['movie-now-playing'],
		queryFn: fetchNowPlayingMovie,
		select: (result) => result.data,
	})
}