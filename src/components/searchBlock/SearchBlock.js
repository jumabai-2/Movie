import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import axios from "axios";
import Pagination from "../ui/pagination/Pagination";


const SearchBlock = () => {

    let [searchParams] = useSearchParams()
    const [movies, setMovies] = useState()
    const [page, setPage] = useState(1)
    const search = searchParams.get("search")
    useEffect(() => {
        getPopularMovies()
    }, [search, page])


    function getPopularMovies() {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f42c53f4f985e0480ab807c5d464b681&query=${search}&page=${page}&language=ru-RU`)
            .then(({data}) => {
                setMovies(data)
                console.log(data)
            })
    }

    return (
        <div>
            <>
                <div className="flex flex-wrap gap-3 justify-content-center">
                    {movies?.results.filter(el => el?.poster_path).map((movies) => (
                        <div className="w-[200px] h-[300px] bg-[red] mt-6 rounded-5"
                             style={{background: `url( ${`https://image.tmdb.org/t/p/w1280/${movies?.poster_path}`}) no-repeat center/contain`}}>
                            <div className="flex items-end">
                                <div
                                    className="mt-[140%] ml-3 w-[50px] h-[50px] bg-[#2A3EBF] rounded-full  position-relative flex items-center justify-content-center ">
                                    <div
                                        className="border-amber-300 position-absolute w-[40px] h-[40px] bg-[black]  flex items-center justify-content-center  rounded-full text-white text-sm">
                                        {`${movies?.vote_average}%`}
                                    </div>
                                </div>
                                <button
                                    className="px-[10px] py-[4px]  ml-4 mb-2 rounded-2  border-blue-600 border-2 font-semibold bg-[#2A3EBF] text-white "
                                >
                                    Watch Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </>
            <Pagination
                currentPage={page}
                allPage={movies?.total_pages}
                onChangePage={(page) => setPage(page)}
            />

        </div>
    );
};

export default SearchBlock;