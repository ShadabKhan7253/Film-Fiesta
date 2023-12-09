import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks';
import { Tv } from '../components';
import { SkeletonDetail } from '../components/SkeletonDetail';

export const TvDetailsPage = () => {
  const params = useParams();
  const { data, isLoading, setUrl } = useFetch();
  useEffect(() => {
    const tvId = params.id;
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const API_KEY = process.env.REACT_APP_API_KEY;

    const URL = `${BASE_URL}/3/tv/${tvId}?api_key=${API_KEY}`;
    setUrl(URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main>
      {isLoading && <SkeletonDetail />}
      {data && <Tv tv={data} />}
    </main>
  );
};
