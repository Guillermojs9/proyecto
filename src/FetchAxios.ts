import axios from "axios";
import { Movie } from "./Movie";
import { MoviesResponse, Result } from "./dataMovies";
import { movieMapper } from "./movieMapper";

const url_base = "https://api.themoviedb.org/3/movie/now_playing";
const api_key = "c76ed6d50b96d2bfc0920abaeade0be3";
export async function fetchMovies(): Promise<Movie[]> {
    const response = await axios.get<MoviesResponse>(`${url_base}?api_key=${api_key}`)
    const movies: Movie[] = response.data.results.map((item: Result) => movieMapper(item));
    return movies;
}