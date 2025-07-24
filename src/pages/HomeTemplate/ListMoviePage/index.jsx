import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchListMovie } from "./slice";

export default function ListMoviePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListMovie());
  }, []);

  const { data, loading } = useSelector((state) => state.listMovieSlice);
  if (loading) return <p>Loading...</p>;
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
