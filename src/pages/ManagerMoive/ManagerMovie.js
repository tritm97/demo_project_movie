import React from 'react';
import TableMovie from '../../Components/TableMovie/TableMovie';

const ManagerMovie = () => {
  return (
    <div className="rounded-xl bg-white p-10">
      <h2 className="font-bold text-xl mb-5">Danh sách các bộ phim đang có</h2>
      <TableMovie />
    </div>
  );
};

export default ManagerMovie;
