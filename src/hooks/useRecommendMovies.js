import api from "../API/API";
import {useQuery} from "react-query";

const fetchRecommendMovies = (id) => {
	return api.get(`/movie/${id}/recommendations`)
}

export const useRecommendMoviesQuery = (id) => {
	useQuery({
		queryKey: ["movie-recommend", id],
		queryFn: ()=>fetchRecommendMovies(id),
		select: (result) => result.data,
		enabled: !!id,
	})
}