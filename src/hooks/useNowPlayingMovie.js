import api from "../API/API";
import {useQuery} from "react-query";

const fetchNowPlayingMovie = (page = 1) => {
	return api.get(`/movie/now_playing`, {params: {page}});
}

export const useNowPlayingMovieQuery = (page) => {
	return useQuery({
		queryKey: ['movie-now-playing', page],
		queryFn: ()=>fetchNowPlayingMovie(page),
		select: (result) => result.data,
		keepPreviousData: true,
	})
}