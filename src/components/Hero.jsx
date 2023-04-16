import React, { useEffect } from "react";
import Navbar from "./Navbar";
import heroImage from "../assets/hero.jpg";
import { fetchPopular } from "../redux/reducers/movieSlice";
import { useSelector, useDispatch } from "react-redux";

//icons
import { BiLinkExternal } from "react-icons/bi";

const Hero = () => {
  const dispatch = useDispatch();
  const { popular } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchPopular());
  }, []);

  const randomPopular = popular[Math.floor(Math.random() * popular.length)];
  console.log(randomPopular);

  return (
    <div className="w-full h-[500px] relative">
      <Navbar />
      <div className="w-full h-full">
        <div className="bg-gradient-to-r from-cBlue absolute w-full h-full"></div> 
        <img
          src={`https://image.tmdb.org/t/p/original${randomPopular?.backdrop_path}`}
          alt="hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 text-white flex flex-col justify-center items-start h-full p-8 gap-5 w-2/3">
          <h1 className="text-2xl font-bold">{randomPopular?.title}</h1>
          <p>{randomPopular?.overview}</p>
          <button className="bg-cRose rounded-md py-2 px-4 flex items-center gap-2">
            Details
            <BiLinkExternal />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
