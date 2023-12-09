import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  MovieDetailsPage,
  MoviesPage,
  NotFoundPage,
  SearchPage,
  TvDetailsPage,
  TvPage,
} from '../pages';

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
          path="/movies/top-rated"
          element={
            <MoviesPage apiPath="/top_rated" key="top_rated" pageTitle="Top Rated | Film Fiesta" />
          }
        />
        <Route
          path="/movies/popular"
          element={
            <MoviesPage apiPath="/popular" key="popular" pageTitle="Popular | Film Fiesta" />
          }
        />
        <Route
          path="/movies/upcoming"
          element={
            <MoviesPage apiPath="/upcoming" key="upcoming" pageTitle="Upcoming | Film Fiesta" />
          }
        />
        <Route
          path="/tv/airing_today"
          element={
            <TvPage
              apiPath="3/tv/airing_today"
              key="airing_today"
              pageTitle="Airing Today | Film Fiesta"
            />
          }
        />
        <Route
          path="/tv/on_the_air"
          element={
            <TvPage apiPath="3/tv/on_the_air" key="on_the_air" pageTitle="Upcoming | Film Fiesta" />
          }
        />
        <Route
          path="/tv/popular"
          element={
            <TvPage apiPath="3/tv/popular" key="popular" pageTitle="Popular | Film Fiesta" />
          }
        />
        <Route
          path="/tv/top_rated"
          element={
            <TvPage apiPath="3/tv/top_rated" key="top-rated" pageTitle="Top Rated | Film Fiesta" />
          }
        />
        <Route path="/tv/:id" element={<TvDetailsPage />} />
        <Route path="/movies/search" element={<SearchPage />} />
        <Route
          path="*"
          element={<NotFoundPage key="search" pageTitle="Result Not Found | Film Fiesta" />}
        />
      </Routes>
    </>
  );
};
