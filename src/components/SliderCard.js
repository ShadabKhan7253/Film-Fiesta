import React from 'react';
import { Link } from 'react-router-dom';

export const SliderCard = ({ id, poster_path, title, release_date }) => {
  const getMonth = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const image_path = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : `https://placehold.co/382x573?text=No\nImage`;
  const data = new Date(release_date);
  const date = data.getDate();
  const month = getMonth[data.getMonth()];
  const year = data.getFullYear();
  const displayDateFormat = date ? `${month} ${date}, ${year}` : '';
  return (
    <div className="mr-4 ">
      <img className="rounded-md" src={image_path} alt={title} />
      {/* <span className="text-center bg-slate-900 text-primary-900 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-primary-900 dark:text-primary-800 ms-3  w-10 h-10 flex items-center">
        70
      </span> */}
      <Link to={`/movies/${id}`}>
        <p className="p-2 text-xl sm:text-base font-semibold text-gray-900  dark:text-slate-50 hover:text-primary-800 dark:hover:text-primary-800">
          {title}
        </p>
      </Link>
      <p className="pl-2 text-base sm:text-sm text-slate-800 dark:text-white">
        {displayDateFormat}
      </p>
    </div>
  );
};
