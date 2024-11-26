import api from "../API/API";
import {useQuery} from "react-query";

const fetchPopularMovie = (page=1) => {
	return api.get(`/movie/popular`, {params: {page}});
}

export const usePopularMovieQuery = (page) => {
	return useQuery({
		queryKey: ["movie-popular",page],
		queryFn: ()=>fetchPopularMovie(page),
		select: (result) => result.data,
		keepPreviousData: true,
	})
}