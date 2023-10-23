import React, { useEffect } from 'react';
import { Popconfirm, Space, Table, Tag, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovieApi } from '../../redux/slices/phimSlice';
import { quanLyPhimServ } from '../../services/quanLyPhim';

const TableMovie = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const { arrPhim } = useSelector((state) => state.phimSlice);
  console.log(arrPhim);
  useEffect(() => {
    dispatch(getAllMovieApi());
  }, []);
  const columns = [
    {
      title: 'Mã phim',
      dataIndex: 'maPhim',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      key: 'age',
      render: (linkHinhAnh, record, index) => {
        // linkHinhAnh: https://movienew.cybersoft.edu.vn/hinhanh/batman-v-superman-dawn-of-justice-123_gp14.jpeg
        // record : {}
        // index :
        console.log(record);
        return <img className="w-32 h-32 object-cover" src={linkHinhAnh} />;
      },
    },
    {
      title: 'Tên phim',
      dataIndex: 'tenPhim',
    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
      width: 500,
    },
    {
      title: 'Hành động',
      render: (text, record, index) => {
        return (
          <div className="space-x-4">
            <Popconfirm
              title="Bạn đang xoá phim"
              description="Bạn có chắc muốn xoá phim này?"
              onConfirm={() => {
                // lấy maPhim cần xoá
                quanLyPhimServ
                  .deleteMovie(record.maPhim)
                  .then((res) => {
                    console.log(res);
                    // gọi lại dữ liệu mới nhất từ server
                    dispatch(getAllMovieApi());
                    messageApi.success('Xoá thành công');
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              // onCancel={cancel}
              okButtonProps={{ className: 'bg-blue-500' }}
              okText="Đồng ý"
              cancelText="Không"
            >
              <button className="text-white bg-red-500 py-1 px-3 rounded-md hover:bg-red-600 duration-300">
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </Popconfirm>
            <button className="text-white bg-black py-1 px-3 rounded-md hover:bg-opacity-70 duration-300">
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      {contextHolder}
      <Table columns={columns} dataSource={arrPhim} />
    </div>
  );
};

export default TableMovie;
