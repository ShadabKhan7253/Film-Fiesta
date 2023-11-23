import React, { useEffect } from 'react';
import { MovieCard } from '../components/MovieCard';
import { useDynamicTitle, useFetch } from '../hooks';
import { Skeleton } from '../components';

export const MoviesPage = ({ apiPath, pageTitle }) => {
  // const URL = `https://api.themoviedb.org/3/movie${apiPath}?api_key=94220ccbdc06539966a08cc0383e233f`;
  const { data, isLoading, error, setUrl } = useFetch();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useDynamicTitle(pageTitle, 'Film Fiesta');

  useEffect(() => {
    const URL = `${BASE_URL}/3/movie${apiPath}?api_key=${API_KEY}`;
    setUrl(URL);
  }, [apiPath]);

  const renderSkeleton = (nums = 6) => {
    let skeleton = [];
    for (let i = 0; i < nums; i++) {
      skeleton.push(<Skeleton key={i} />);
    }
    return skeleton;
  };

  return (
    <main>
      <div className="flex justify-start flex-wrap ">
        {isLoading && renderSkeleton()}
        {data &&
          data.results &&
          data.results.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </main>
  );
};
