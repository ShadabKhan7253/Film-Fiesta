import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  HomePage,
  MovieDetailsPage,
  MoviesPage,
  NotFoundPage,
  PeopleDetailsPage,
  PeoplePage,
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
            <HomePage
              apiPath="/now_playing"
              key="now_playing"
              pageTitle="Now Playing | Film Fiesta"
            />
          }
        />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route
          path="/movies/now_playing"
          element={
            <MoviesPage
              apiPath="/now_playing"
              key="now_playing"
              pageTitle="Now Playing | Film Fiesta"
            />
          }
        />
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
              apiPath="/airing_today"
              key="airing_today"
              pageTitle="Airing Today | Film Fiesta"
            />
          }
        />
        <Route
          path="/tv/on_the_air"
          element={
            <TvPage apiPath="/on_the_air" key="on_the_air" pageTitle="Upcoming | Film Fiesta" />
          }
        />
        <Route
          path="/tv/popular"
          element={<TvPage apiPath="/popular" key="popular" pageTitle="Popular | Film Fiesta" />}
        />
        <Route
          path="/tv/top_rated"
          element={
            <TvPage apiPath="/top_rated" key="top-rated" pageTitle="Top Rated | Film Fiesta" />
          }
        />
        <Route path="/tv/:id" element={<TvDetailsPage />} />
        <Route
          path="/poeple/popular"
          element={<PeoplePage apiPath="/popular" key="popular" pageTitle="People | Film Fiesta" />}
        />
        <Route path="/people/:id" element={<PeopleDetailsPage />} />
        <Route path="/movies/search" element={<SearchPage />} />
        <Route
          path="*"
          element={<NotFoundPage key="search" pageTitle="Result Not Found | Film Fiesta" />}
        />
      </Routes>
    </>
  );
};
