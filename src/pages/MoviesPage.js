import React, { useEffect } from 'react';
import { MovieCard } from '../components/MovieCard';
import { useFetch } from '../hooks';
import { Link } from 'react-router-dom';

export const MoviesPage = ({ apiPath }) => {
  // const URL = `https://api.themoviedb.org/3/movie${apiPath}?api_key=94220ccbdc06539966a08cc0383e233f`;
  const { data, isLoading, error, setUrl } = useFetch();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    const URL = `${BASE_URL}/3/movie${apiPath}?api_key=${API_KEY}`;
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
