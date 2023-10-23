export const saveLocalStore = (data, key) => {
  // chuyển đổi dữ liệu về chuỗi json
  let stringData = JSON.stringify(data);
  // lưu xuống local
  localStorage.setItem(key, stringData);
};

export const getLocalStore = (key) => {
  let data = localStorage.getItem(key); // data || null
  // console.log(JSON.parse(null));
  return JSON.parse(data);
};
