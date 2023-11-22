import React from 'react';
import { MovieCard } from '../components/MovieCard';

export const MoviesPage = () => {
  return (
    <main>
      <div className="flex flex-wrap">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </main>
  );
};
