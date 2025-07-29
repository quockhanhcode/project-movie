import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import { Navigate, useNavigate } from "react-router-dom";

export default function LoginPgae() {
  const navigate = useNavigate();
  const [values, setValue] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const handleOnchange = (e) => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("QuanLyNguoiDung/DangNhap", values);
      console.log(response);
      const user = response.data.content;
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        if (user.maLoaiNguoiDung === "QuanTri") {
          navigate("admin/dasboard");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.maLoaiNguoiDung === "QuanTri") {
    return <Navigate to="/admin/dasboard" />;
  }
  if (user && user.maLoaiNguoiDung !== "QuanTri") {
    return <Navigate to="/" />;
  }
  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center">LoginPgae</h1>
      <form className="w-96" onSubmit={handleSubmit}>
        <input
          onChange={handleOnchange}
          value={values.taiKhoan}
          name="taiKhoan"
          placeholder="Tai khoang"
          className="p-3 border rounded-lg w-full"
        />
        <input
          onChange={handleOnchange}
          value={values.matKhau}
          name="matKhau"
          placeholder="Mat khau"
          type="password"
          className="my-4 p-3 border rounded-lg w-full"
        />
        <button className="p-3 mx-auto table bg-green-900 text-white rounded-lg">
          Dang nhap
        </button>
      </form>
    </div>
  );
}
