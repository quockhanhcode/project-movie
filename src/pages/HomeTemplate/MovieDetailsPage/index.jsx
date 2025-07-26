import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { movieDetail } from "./slice";

export default function MovieDetailsPage() {
  const dispath = useDispatch();
  const { movieId } = useParams();
  const { movie } = useSelector((state) => state.movieDetailSlice);
  // const [movie, setMovie] = useState(null);
  useEffect(() => {
    dispath(movieDetail(movieId));
  }, [movieId]);

  // useEffect(() => {
  //   const getMovieDetails = async () => {
  //     try {
  //       const reponse = await api.get(
  //         `/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`
  //       );
  //       setMovie(reponse.data.content);
  //       console.log(movie);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getMovieDetails();
  // }, []);

  return (
    <div className="max-w-[1280px] mx-auto py-9">
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-1">
          <img
            className="w-full h-64 object-cover rounded-md"
            alt={movie?.biDanh}
            src={movie?.hinhAnh}
          />
        </div>
        <div className="col-span-5 space-y-3.5">
          <h1 className="text-2xl font-medium ">Tên Phim: {movie?.tenPhim}</h1>
          <p className="">Mô tả: {movie?.moTa}</p>
          <p>
            Ngay chieu:{" "}
            {movie?.ngayKhoiChieu
              ? format(movie?.ngayKhoiChieu, "dd/MM/yyy")
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
