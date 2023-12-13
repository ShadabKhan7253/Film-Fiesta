import React, { useEffect, useState } from 'react';
import { useDynamicTitle, useFetch } from '../hooks';
import { PeopleCard, Skeleton } from '../components';
import { Pagination } from '../components/Pagination';

export const PeoplePage = ({ apiPath, pageTitle }) => {
  // const URL = `https://api.themoviedb.org/3/movie${apiPath}?api_key=94220ccbdc06539966a08cc0383e233f`;
  const [pageNo, setPageNo] = useState(1);
  const { data, isLoading, setUrl } = useFetch();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const totalPage = data && data.total_pages;

  useDynamicTitle(pageTitle, 'Film Fiesta');

  const handleNextPage = () => {
    setPageNo(pageNo + 1);
  };

  const handlePreviousPage = () => {
    setPageNo(pageNo - 1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const URL = `${BASE_URL}/3/person${apiPath}?api_key=${API_KEY}&page=${pageNo}`;
    setUrl(URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiPath, pageNo]);

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
          data.results.map((people) => <PeopleCard key={people.id} people={people} />)}
      </div>

      <Pagination
        totalPage={totalPage}
        pageNo={pageNo}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </main>
  );
};
