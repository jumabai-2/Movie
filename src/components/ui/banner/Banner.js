import React from 'react';
import {useNavigate} from "react-router-dom";

const Banner = ({movie}) => {
    const navigate = useNavigate()
    function clickButton(){
        navigate(`/movie-details/${movie.id}`)
    }
    return (
        <div className="flex justify-content-center">
            <div className="w-[90%] h-[400px] bg-[black] mt-6 rounded-lg"
                 style={{background: `url( ${`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}) no-repeat center/cover`}}
            >
                <div className="ml-9 mt-[280px]  ">
                    <h1 className="text-white">{movie.title}</h1>
                    <div className="flex ">
                        <div
                            className=" ml-3 w-[50px] h-[50px] bg-[#2A3EBF] rounded-full  position-relative flex items-center justify-content-center ">
                            <div
                                className="border-amber-300 position-absolute w-[40px] h-[40px] bg-[black]  flex items-center justify-content-center  rounded-full text-white text-sm">
                                {`${movie.vote_average}%`}
                            </div>
                        </div>
                        <button
                            className="px-[10px] py-[4px]  ml-4 mb-2 rounded-2  border-blue-600 border-2 font-semibold bg-[#2A3EBF] text-white "
                            onClick={clickButton}
                        >
                            Watch Now
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;