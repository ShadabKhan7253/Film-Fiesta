import React from 'react';
import { Link } from 'react-router-dom';

export const PeopleCard = ({ people }) => {
  const { id, original_name, known_for, profile_path } = people;
  const image_path = profile_path
    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
    : `https://placehold.co/382x573?text=No\nImage`;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2.5">
      <Link to={`/people/${id}`}>
        <img className="rounded-t-lg" src={image_path} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/people/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-50 hover:text-primary-800 dark:hover:text-primary-800">
            {original_name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-slate-800 dark:text-white">
          <span className="font-bold">Popular For:</span>{' '}
          {known_for.map((known) => (
            <span key={known.id} className="">
              {known.title},
            </span>
          ))}
        </p>
        <Link
          to={`/people/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-800 rounded-lg hover:bg-primary-1000 focus:outline-none relative active:top-0.5"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
