import React from 'react';
import { useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import { Carousel } from 'antd';
import './listMovie.scss';
import useReponsive from '../../hook/useReponsive';
const ListMovie = () => {
  const { arrPhim } = useSelector((state) => state.phimSlice);
  const windowSize = useReponsive();
  console.log(windowSize);
  // console.log(arrPhim);
  return windowSize.widthWindow > 1200 ? (
    <div className="container py-10">
      <h2
        className={`text-center font-bold text-2xl ${
          windowSize.widthWindow < 576 ? 'text-red-500' : ''
        }`}
      >
        Danh sách các phim
      </h2>
      <Carousel
        rows={2}
        slidesToShow={4}
        dots={true}
        className="carousel_movie"
      >
        {arrPhim.map((item, index) => {
          return (
            <div className="p-5" key={index}>
              <MovieItem movie={item} />
            </div>
          );
        })}
      </Carousel>
      {/* <div className="grid grid-cols-4 gap-5 mt-5"> */}

      {/* </div> */}
    </div>
  ) : (
    <div>Hello CyberSoft</div>
  );
};

export default ListMovie;
