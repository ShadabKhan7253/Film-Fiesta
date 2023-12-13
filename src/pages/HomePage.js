import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDynamicTitle, useFetch } from '../hooks';
import { SliderCard } from '../components';

export const HomePage = () => {
  var settings = {
    dots: true,
    infinite: false,
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
          dots: true,
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
        },
      },
    ],
  };
  useDynamicTitle('Film Fiesta');

  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const URL = `${BASE_URL}/3/trending/movie/week?api_key=${API_KEY}`;
  const { data } = useFetch(URL);
  data && console.log(data);

  return (
    <main>
      <h1 className="mt-5 font-bold text-slate-800 dark:text-white text-5xl "> Movies </h1>
      <p className="mt-5 text-slate-800 dark:text-white text-lg w-2/5">
        Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or
        anywhere in-between. So many titles, so much to experience.
      </p>

      <div className="m-10">
        <h3 className="flex items-center mb-5 text-3xl font-semibold text-primary-800 dark:text-white ">
          Trending Movies
        </h3>
        <Slider {...settings} className="p-5">
          {data &&
            data.results &&
            data.results.map((movie) => <SliderCard key={movie.id} movie={movie} />)}
        </Slider>
      </div>
    </main>
  );
};
