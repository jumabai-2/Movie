import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Pagination from "../ui/pagination/Pagination";

const TvShow = () => {
    const [page, setPage] = useState(1)
    const [movie, setMovie] = useState()
    const navigate = useNavigate()

    function clickButton() {
        navigate(`/tv-details/${movie?.id}`)
    }

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/tv/popular?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU&page=1${page}`)
            .then(({data}) => {
                setMovie(data)
                console.log(data)
            })
    }, [page])
    return (
        <>
            {movie?.results.map(movie => (
                <div className="w-[200px] h-[300px] bg-[red] mt-6 rounded-5"
                     style={{background: `url( ${`https://image.tmdb.org/t/p/w1280/${movie?.poster_path}`}) no-repeat center/contain`}}>
                    <div className="flex items-end">
                        <div
                            className="mt-[140%] ml-3 w-[50px] h-[50px] bg-[#2A3EBF] rounded-full  position-relative flex items-center justify-content-center ">
                            <div
                                className="border-amber-300 position-absolute w-[40px] h-[40px] bg-[black]  flex items-center justify-content-center  rounded-full text-white text-sm">
                                {`${movie?.vote_average}%`}
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
            ))}
            <Pagination
                currentPage={page}
                allPages={movie?.total_pages}
                onChangePage={(page) => setPage(page)}
            />
        </>
    );
};

export default TvShow;