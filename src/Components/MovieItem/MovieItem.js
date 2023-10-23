import React from 'react';

const MovieItem = ({ movie }) => {
  // console.log(movie);
  const { tenPhim, hinhAnh, moTa } = movie;
  return (
    <div>
      <img className="h-96 w-full object-cover" src={hinhAnh} alt="" />
      <h3 className="text-xl font-normal my-3 line-clamp-2 min-h-[56px]">
        <span className="bg-orange-500 py-1 px-2 rounded text-white mr-3 text-xl">
          C18
        </span>
        {tenPhim}
      </h3>
      <p className="line-clamp-2">{moTa}</p>
    </div>
  );
};

export default MovieItem;
