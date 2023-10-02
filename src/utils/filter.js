import { MOVIE_DURATION } from '../utils/constants';

export function filterMoviesByName(movies, searchQuery) {

  return movies.filter((i) => {
    return i.nameRU.toLowerCase().includes((searchQuery || '').toLowerCase()) ||
    i.nameEN.toLowerCase().includes((searchQuery || '').toLowerCase())
  });
}

export function filterShorts(movies, filterEnabled) {
  if (filterEnabled){
    return movies.filter((i) => i.duration <= MOVIE_DURATION);
  }
  else {
    return movies;
  }
}