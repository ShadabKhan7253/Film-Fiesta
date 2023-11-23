import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks';
import { Movie } from '../components';
import { SkeletonDetail } from '../components/SkeletonDetail';

export const MovieDetailsPage = () => {
  const params = useParams();
  const { data, isLoading, error, setUrl } = useFetch();

  console.log(data);
  useEffect(() => {
    const movieId = params.id;
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const API_KEY = process.env.REACT_APP_API_KEY;

    const URL = `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}`;
    setUrl(URL);
  }, []);
  return (
    <main>
      {isLoading && <SkeletonDetail />}
      {data && <Movie movie={data} />}
    </main>
  );
};
