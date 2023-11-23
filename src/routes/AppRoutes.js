import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MovieDetailsPage, MoviesPage, NotFoundPage, SearchPage } from '../pages';

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MoviesPage
              apiPath="/now_playing"
              key="now_playing"
              pageTitle="Now Playing | Film Fiesta"
            />
          }
        />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route
          path="/top-rated"
          element={
            <MoviesPage apiPath="/top_rated" key="top_rated" pageTitle="Top Rated | Film Fiesta" />
          }
        />
        <Route
          path="/popular"
          element={
            <MoviesPage apiPath="/popular" key="popular" pageTitle="Popular | Film Fiesta" />
          }
        />
        <Route
          path="/upcoming"
          element={
            <MoviesPage apiPath="/upcoming" key="upcoming" pageTitle="Upcoming | Film Fiesta" />
          }
        />
        <Route path="/movies/search" element={<SearchPage />} />
        <Route
          path="*"
          element={<NotFoundPage key="search" pageTitle="Result Not Found | Film Fiesta" />}
        />
      </Routes>
    </>
  );
};
