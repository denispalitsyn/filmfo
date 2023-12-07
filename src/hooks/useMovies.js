import { useEffect, useState } from 'react';
import MovieApi from '../api';

const genreById = {
  action: 28,
  adventure: 12,
  comedy: 35,
  documentary: 99,
  fantasy: 14,
  horror: 27,
  western: 37,
};

export function useMovies() {
  const [movies, setMovies] = useState({
    upcoming: [],
    popular: [],
    topRated: [],
    adventure: [],
    comedy: [],
    action: [],
    horror: [],
    fantasy: [],
    documentary: [],
    western: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([
      MovieApi.getUpcoming(),
      MovieApi.getPopular(),
      MovieApi.getTopRated(),
      MovieApi.getMovieByGenreId(genreById.adventure),
      MovieApi.getMovieByGenreId(genreById.comedy),
      MovieApi.getMovieByGenreId(genreById.action),
      MovieApi.getMovieByGenreId(genreById.horror),
      MovieApi.getMovieByGenreId(genreById.fantasy),
      MovieApi.getMovieByGenreId(genreById.documentary),
      MovieApi.getMovieByGenreId(genreById.western),
    ])
      .then((responses) =>
        setMovies({
          upcoming: responses[0],
          popular: responses[1],
          topRated: responses[2],
          adventure: responses[3],
          comedy: responses[4],
          action: responses[5],
          horror: responses[6],
          fantasy: responses[7],
          documentary: responses[8],
          western: responses[9],
        })
      )
      .catch((error) => setError(error?.message || 'Something went wrong'))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    movies,
    isLoading,
    error,
  };
}
