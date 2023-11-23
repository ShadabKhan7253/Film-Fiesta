import React from 'react';

export const Skeleton = () => {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2.5">
        <div className="h-[300px] bg-gray-200 dark:bg-gray-700 w-[350px] mb-4"></div>
        <div className="p-5">
          <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"></div>
          <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-2.5"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
