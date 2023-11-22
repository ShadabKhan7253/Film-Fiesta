import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MovieDetails, MoviesPage, NotFoundPage } from '../pages';

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/top-rated" element={<MoviesPage />} />
        <Route path="/popular" element={<MoviesPage />} />
        <Route path="/upcoming" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
