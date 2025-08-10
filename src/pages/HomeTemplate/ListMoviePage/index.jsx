// import React, { useEffect, useState } from "react";
import Movie from "./Movie";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchListMovie } from "./slice";
import { useQuery } from "@tanstack/react-query";
import { getListMovieAPI } from "../../../services/movie.api";

export default function ListMoviePage() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["list-movie"],
    queryFn: () => {
      return getListMovieAPI("GP01"); //khi api chay thanh cong thi ham getListMovieAPI tra ve cai gi thi data trogn useQuery se nhan cai do
    },
  });

  const handleRefetch = () => {
    refetch();
  };

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchListMovie());
  // }, []);

  // const { data, loading } = useSelector((state) => state.listMovieSlice);
  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return (
      <div>
        Loi hien thi{" "}
        <button
          onClick={handleRefetch}
          className="cursor-pointer p-3 text-sm rouned-sm bg-amber-400 text-white"
        >
          Thu lai
        </button>
      </div>
    );
  const renDerMovie = () => {
    if (data) {
      return data.map((movie) => {
        return <Movie key={movie.maPhim} movie={movie} />;
      });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <h1>List Movie Page</h1>
      <div className="grid grid-cols-4 gap-2.5 gap-y-4">{renDerMovie()}</div>
    </div>
  );
}
