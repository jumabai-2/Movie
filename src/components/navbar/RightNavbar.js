import React, {useEffect, useState} from 'react';
import {MDBIcon} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import axios from "axios";

const RightNavbar = () => {
    const [movie, setMovie] = useState()
    useEffect(()=>{
getPopular()
    },[])

    function getPopular(){
        axios("https://api.themoviedb.org/3/movie/now_playing?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU&page=1")
            .then(({data})=>{
                setMovie(data)
                console.log(data)
            })
    }
    return (
        <div className="">
            <div className="border-solid border-l-2 border-blue-[#C4CCD4] h-[100%] w-[300px] fixed right-[0] overflow-y-scroll ">
                <div className="mt-3 flex items-center">
                    <MDBIcon fas icon="search" className="position-absolute ml-10 z-10 text-[#687E93]"/>
                    <Link to={"/input"}> <input
                        className="position-relative outline-none ml-8 pl-8  rounded-3xl w-55 h-10 border-2 bg-[#DBE9F7] "
                        type="text" placeholder="search"/></Link>
                </div>
                <div className="flex items-center justify-content-between w-[88%] mt-8">
                    <p className="ml-8">Popular Movies</p>
                    <div className="flex items-center mb-2">
                        <div className="bg-[#687E93] w-[5px] h-[5px] rounded-3xl mr-1">
                        </div>
                        <div className="bg-[#687E93] w-[5px] h-[5px] rounded-3xl">
                        </div>
                    </div>

                </div>
                <div className="">
                {movie?.results.map(movie => (
                 <Link to={"/"}>  <div className="w-[350px] h-[250px] mt-5 ml-[-5px]"
                         style={{background: `url( ${`https://image.tmdb.org/t/p/w1280/${movie?.poster_path}`}) no-repeat center/contain`}}
                    >
                    </div></Link>
                    ))}
            </div>
            </div>
            <div className="flex ">

            </div>
        </div>
    );
};

export default RightNavbar;