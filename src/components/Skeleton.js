import React from 'react';

export const Skeleton = () => {
  return (
    <div role="status" class="max-w-sm animate-pulse">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2.5">
        <div class="h-[300px] bg-gray-200 dark:bg-gray-700 w-[350px] mb-4"></div>
        <div className="p-5">
          <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"></div>
          <div class="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-2.5"></div>
        </div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
  );
};
