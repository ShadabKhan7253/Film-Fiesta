import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDynamicTitle, useFetch } from '../hooks';
import { SliderCard } from '../components';

export const HomePage = () => {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  useDynamicTitle('Film Fiesta');

  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  // Trending MovieData
  const movieURL = `${BASE_URL}/3/trending/movie/week?api_key=${API_KEY}`;
  const { data: movieData } = useFetch(movieURL);

  // Trending TVData
  const tvURL = `${BASE_URL}/3/trending/tv/week?api_key=${API_KEY}`;
  const { data: tvData } = useFetch(tvURL);

  return (
    <main>
      <h1 className="mt-5 font-bold text-slate-800 dark:text-white text-5xl pl-5 sm:pl-0">
        {' '}
        Movies{' '}
      </h1>
      <p className="mt-5 text-slate-800 dark:text-white text-lg w-4/5 sm:w-2/5 pl-5 sm:pl-0">
        Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or
        anywhere in-between. So many titles, so much to experience.
      </p>
      {/* Trending Movie */}
      <div className="mb-5">
        <h3 className="flex items-center mt-5 text-3xl font-semibold text-primary-800 pl-5 sm:pl-0 ">
          Trending Movies
        </h3>
        <div className="ml-10 mr-10">
          <Slider {...settings} className="p-5">
            {movieData &&
              movieData.results &&
              movieData.results.map((movie) => (
                <SliderCard
                  key={movie.id}
                  id={movie.id}
                  poster_path={movie.poster_path}
                  title={movie.original_title}
                  release_date={movie.release_date}
                />
              ))}
          </Slider>
        </div>
      </div>
      {/* Trending Tv */}
      <div className="mb-5">
        <h3 className="flex items-center mt-5 text-3xl font-semibold text-primary-800 pl-5 sm:pl-0 ">
          Trending Tv Shows
        </h3>
        <div className="ml-10 mr-10">
          <Slider {...settings} className="p-5">
            {movieData &&
              tvData.results &&
              tvData.results.map((tv) => (
                <SliderCard
                  key={tv.id}
                  id={tv.id}
                  poster_path={tv.poster_path}
                  title={tv.original_name}
                  release_date={tv.first_air_date}
                />
              ))}
          </Slider>
        </div>
      </div>
    </main>
  );
};
