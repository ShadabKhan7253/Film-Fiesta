import React, { useEffect } from 'react';
import { MovieCard } from '../components/MovieCard';
import { useFetch } from '../hooks';

export const MoviesPage = ({ apiPath }) => {
  // const URL = `https://api.themoviedb.org/3/movie${apiPath}?api_key=94220ccbdc06539966a08cc0383e233f`;
  const { data, isLoading, error, setUrl } = useFetch();

  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/movie${apiPath}?api_key=94220ccbdc06539966a08cc0383e233f`;
    setUrl(URL);
  }, [apiPath]);

  return (
    <main>
      <div className="flex justify-start flex-wrap ">
        {data &&
          data.results &&
          data.results.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </main>
  );
};
