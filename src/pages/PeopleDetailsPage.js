import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks';
import { SkeletonDetail } from '../components/SkeletonDetail';
import { People } from '../components';

export const PeopleDetailsPage = () => {
  const params = useParams();
  const { data, isLoading, setUrl } = useFetch();

  useEffect(() => {
    const peopleId = params.id;
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const API_KEY = process.env.REACT_APP_API_KEY;

    const URL = `${BASE_URL}/3/person/${peopleId}?api_key=${API_KEY}`;
    setUrl(URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main>
      {isLoading && <SkeletonDetail />}
      {data && <People people={data} />}
    </main>
  );
};
