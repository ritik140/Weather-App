import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/weather", { state: input });
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black  font-medium text-center bg-[url('src/Container/Images/backgroundImage.jpg')] bg-cover bg-center h-screen">
        <h1 className="mb-6 p-4 text-[100px] text-blue-300">Mausam</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor=""></label>
          <input
            className="w-[100vh] max-w-2xl bg-white p-5 rounded-xl shadow-md"
            type="text"
            id="city_name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter City Name..."
          />
          <br />
          <button
            type="submit"
            className="w-[30vh] text-white text-[20px] bg-red-500 hover:bg-red-600 m-6 p-2 rounded-full shadow-md"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default MainPage;
