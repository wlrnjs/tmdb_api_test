import api from "../API/API";
import {useQuery} from "react-query";

const fetchMovieGenreList = () => {
	return api.get(`/genre/movie/list`)
}

export const useMovieGenresListQuery = () => {
	return useQuery({
		queryKey: ["movie-genre-list"],
		queryFn: fetchMovieGenreList,
		select: (result) => result.data.genres,
	})
}