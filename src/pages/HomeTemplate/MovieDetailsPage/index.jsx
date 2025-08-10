import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { movieDetail } from "./slice";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetailsApi } from "../../../services/movie.api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["movie-details"],
    queryFn: () => getMovieDetailsApi(movieId),
  });

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
