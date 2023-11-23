import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDynamicTitle, useFetch } from '../hooks';
import { Skeleton } from '../components/Skeleton';
import { MovieCard } from '../components/MovieCard';

export const SearchPage = () => {
  const [params] = useSearchParams();
  const queryString = params.get('q');
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const { data, isLoading, setUrl } = useFetch();
  useDynamicTitle(`Results for: ${queryString} | Film Fiesta`, 'Film Fiesta');
  const renderSkeleton = (nums = 3) => {
    let skeleton = [];
    for (let i = 0; i < nums; i++) {
      skeleton.push(<Skeleton key={i} />);
    }
    return skeleton;
  };

  useEffect(() => {
    const URL = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${queryString}`;
    setUrl(URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryString]);
  return (
    <main>
      <h1 className="text-3xl dark:text-white text-slate-800 my-4">
        {data && data.results.length === 0
          ? `No Movie found for ${queryString}`
          : `Search Results for: ${queryString}`}
      </h1>
      <div className="flex justify-start flex-wrap">
        {isLoading && renderSkeleton(6)}
        {data && data.results.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </main>
  );
};
