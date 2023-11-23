import React from 'react';
import { MovieCard } from '../components/MovieCard';
import { useFetch } from '../hooks';

export const MoviesPage = () => {
  const URL =
    'https://api.themoviedb.org/3/movie/now_playing?api_key=94220ccbdc06539966a08cc0383e233f';
  const { data, isLoading, error } = useFetch(URL);
  return (
    <main>
      <div className="flex justify-start flex-wrap ">
        {data && data.results && data.results.map((movie) => <MovieCard movie={movie} />)}
      </div>
    </main>
  );
};
