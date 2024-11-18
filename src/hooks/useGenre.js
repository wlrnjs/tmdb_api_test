import api from "../API/API";
import {useQuery} from "react-query";

const fetchGenres = () => {
	return api.get(`/genre/movie/list`);
}

export const useGenreQuery = () => {
	return useQuery({
		queryKey: ["movie-genre"],
		queryFn: fetchGenres,
		select: (result) => result.data,
	})
}