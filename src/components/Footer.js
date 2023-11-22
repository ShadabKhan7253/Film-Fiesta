import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:items-center   dark:bg-gray-800 dark:border-gray-600 text-center">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()}
        <Link to="" class="hover:underline">
          FilmFiesta&trade;
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};
