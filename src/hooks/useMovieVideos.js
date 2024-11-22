import api from "../API/API";
import {useQuery} from "react-query";

const fetchMovieVideo = (id) => {
	return api.get(`/movie/${id}/videos`)
}

export const useMovieVideoQuery = (id) => {
	return useQuery({
		queryKey: ["movie-video", id],
		queryFn: () => fetchMovieVideo(id),
		select: (result) => result.data,
	})
}