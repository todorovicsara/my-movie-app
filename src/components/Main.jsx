import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";

export const truncateString = (string, num) => {
  if (string?.length > num) {
    return string.slice(0, num) + "...";
  } else {
    return string;
  }
};

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  const reversedReleaseDate = movie?.release_date
    ? movie.release_date.split("-").reverse().join("-")
    : "";

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movie);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-logCabin"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4 flex items-center">
            <span className="text-gray-200">Rating: </span>
            <div className="flex items-center">
              <span className="text-yellow-400 ml-1" >⭐</span>
              <span className="text-gray-200 ml-1">{movie?.vote_average}</span>
              
            </div>
          </div>

          <p className="text-clayCreek text-released">
            Released: {reversedReleaseDate}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl: max-w-[35%] text-gray-200 my-1.5">
            {truncateString(movie?.overview, 100)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

