import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const Weather = () => {
  const location = useLocation();
  const city_name = location.state;
  const [data, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=50bfa360168e30d46a703bf10c00c212`
    )
      .then((response) => {
        if (!response.ok) {
          throw error(response.error);
        }
        return response.json();
      })
      .then((data) => {
        setDate(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(true);
      });
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
        <div className="w-[100vh] h-[70vh] max-w-2xl bg-white p-5 rounded-xl shadow-md">
          <h1 className="text-center font-bold text-[30px]">
            Oops not able to fetch the data Try Again!
          </h1>
          <ul className="border-2 border-red-200 text-center font-bold text-[20px] mt-8 bg-red-400 rounded-lg p-8">
            <li>Weather:{data.weather[0].main}</li>
            <li>Temprature:{data.main.temp}</li>
            <li>Humidity:{data.main.humidity}</li>
            <li>Wind Speed:{data.wind.speed}</li>
          </ul>
          <Link to="/" className="">
            <button
              className="text-center mt-4 w-[30vh] text-white text-[20px] bg-red-500 hover:bg-red-600 m-6 p-2 rounded-lg shadow-md "
              type="submit"
            >
              Go Back
            </button>
          </Link>
        </div>
      </div>
    );
  }
  if (loading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="w-[100vh] h-[70vh] max-w-2xl bg-white p-5 rounded-xl shadow-md">
        <h1 className="text-center font-bold text-[50px]">{city_name}</h1>
        <ul className="border-2 border-red-200 text-center font-bold text-[20px] mt-8 bg-red-400 rounded-lg p-8">
          <li>Weather:{data.weather[0].main}</li>
          <li>Temprature:{data.main.temp} F</li>
          <li>Humidity:{data.main.humidity}</li>
          <li>Wind Speed:{data.wind.speed}</li>
        </ul>
        <Link to="/" className="">
          <button
            className="text-center mt-4 w-[30vh] text-white text-[20px] bg-red-500 hover:bg-red-600 m-6 p-2 rounded-lg shadow-md "
            type="submit"
          >
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Weather;
