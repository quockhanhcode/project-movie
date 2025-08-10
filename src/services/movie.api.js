import api from "./api";

export const getListMovieAPI = async (maNhom) => {
  try {
    const response = await api.get(
      `QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}&soTrang=1&soPhanTuTrenTrang=100}`
    );
    return response.data.content;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetailsApi = async (movieId) => {
  try {
    const reponse = await api.get(
      `/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`
    );
    return reponse.data.content;
  } catch (error) {
    console.log(error);
  }
};
