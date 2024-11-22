import api from "../API/API";
import {useQuery} from "react-query";

const fetchSearchMovie = (keyword) => {
	return api.get(keyword? `/search/movie?query=${keyword}` : `/movie/popular`)
}

export const useSearchMovieQuery = (keyword) => {
	return useQuery({
		queryKey: ["movie-search", keyword],
		queryFn: () => fetchSearchMovie(keyword),
		select: (result) => result.data,
	})
}