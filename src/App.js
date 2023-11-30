import { Fragment, useEffect, useState } from 'react';
import MovieApi from './api';
import { getRandomMinMax } from './utils';

const genreById = {
  action: 28,
  adventure: 12,
  comedy: 35,
  documentary: 99,
  fantasy: 14,
  horror: 27,
  western: 37,
};

function App() {
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
      .catch((error) => console.log(error));
  }, []);

  console.log('movies', movies);

  const movieList = [
    {
      key: 'upcoming',
      title: 'Upcoming Movies',
    },
    {
      key: 'popular',
      title: 'Popular Movies',
    },
    {
      key: 'topRated',
      title: 'Top Rated Movies',
    },
    {
      key: 'adventure',
      title: 'Adventure Movies',
    },
    {
      key: 'comedy',
      title: 'Comedy Movies',
    },
    {
      key: 'action',
      title: 'Action Movies',
    },
    {
      key: 'horror',
      title: 'Horror Movies',
    },
    {
      key: 'fantasy',
      title: 'Fantasy Movies',
    },
    {
      key: 'documentary',
      title: 'Documentary Movies',
    },
    {
      key: 'western',
      title: 'Western Movies',
    },
  ];

  const randomMovie =
    movies[movieList[getRandomMinMax(0, movieList.length - 1)].key][
      getRandomMinMax(0, 19)
    ];

  if (!randomMovie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      <div
        className="backdrop h-[80vh] max-w-full"
        style={{
          '--url': `url(https://image.tmdb.org/t/p/w1280${randomMovie.backdrop_path})`,
        }}
      >
        <div className="container mx-auto px-5 pt-[30vh]">
          <h2 className="text-8xl font-bold line-clamp-1 mb-5">
            {randomMovie.original_title}
          </h2>
          <button className="h-12 px-5 bg-white text-black rounded-md text-xl font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 mb-5">
            Details
          </button>
          <div className="max-w-2xl line-clamp-3">{randomMovie.overview}</div>
        </div>
      </div>
      <div className="container mx-auto text-3xl px-5">
        {movieList.map(({ key, title }) => (
          <Fragment key={title + key}>
            <h2 className="mb-5 font-bold mt-10">{title}</h2>
            <div className="posters-container overflow-x-auto overflow-y-hidden flex gap-10">
              {movies[key].map(({ poster_path, title, id }) => (
                <div
                  key={key + id}
                  className="bg-slate-400 min-w-[150px] h-[225px] overflow-hidden cursor-pointer"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                    alt={title}
                    width={150}
                    height={225}
                    className="hover:scale-125 transition-all duration-700"
                  />
                </div>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
