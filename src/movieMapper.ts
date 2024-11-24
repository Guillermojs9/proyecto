import { Result } from "./dataMovies";
import { Movie } from "./Movie";

export function movieMapper(item: Result): Movie {
    return {
      id: item.id,
      title: item.title,
    }
  }