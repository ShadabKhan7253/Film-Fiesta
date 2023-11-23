import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MovieDetailsPage, MoviesPage, NotFoundPage, SearchPage } from '../pages';

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MoviesPage apiPath="/now_playing" />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/top-rated" element={<MoviesPage apiPath="/top_rated" />} />
        <Route path="/popular" element={<MoviesPage apiPath="/popular" />} />
        <Route path="/upcoming" element={<MoviesPage apiPath="/upcoming" />} />
        <Route path="/movies/search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
