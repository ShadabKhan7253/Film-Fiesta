import React from 'react';

export const Pagination = ({ totalPage, pageNo, handleNextPage, handlePreviousPage }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-slate-800 dark:text-white">
        Showing <span className="font-semibold text-slate-800 dark:text-white">{pageNo}</span> of{' '}
        <span className="font-semibold text-slate-800 dark:text-white">{totalPage}</span> Pages
      </span>
      <div className="inline-flex mt-2 xs:mt-0 mb-5">
        <button
          className={`flex items-center justify-center px-3 h-8 text-sm font-medium  mr-3 rounded ${
            pageNo === 1
              ? 'text-slate-800 bg-primary-200'
              : 'text-white bg-primary-800 hover:bg-primary-1000'
          }`}
          disabled={pageNo === 1 ? true : false}
          onClick={handlePreviousPage}
        >
          Prev
        </button>
        <button
          className={`flex items-center justify-center px-3 h-8 text-sm font-medium rounded ${
            pageNo === totalPage
              ? 'text-slate-800 bg-primary-200'
              : 'text-white bg-primary-800 hover:bg-primary-1000'
          }`}
          // disabled={pageNo === data.total_page ? true : false}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};
