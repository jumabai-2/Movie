import React, {useEffect, useState} from 'react';
import axios from "axios";

const Home = () => {
    const [movies, setMovies] = useState([])
    const [selectedTab, setSelectedTab] = useState(0)
    useEffect(() => {
        getPopularMovies()
    }, [])

    function getPopularMovies() {
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU&page=1")
            .then(({data}) => {
                setMovies(data)
                console.log(data)
            })
    }

    const movieTabs = ["Movie", "TV Show", "Anime"]

    function selectTabs(index) {
        setSelectedTab(index)
    }

    return (
        <div>
            <div className="mt-6 flex items-center gap-6">
                {movieTabs.map((movieTabs, index) => (
                    <span className=" ml-3 cursor-pointer"
                          style={{color: index === selectedTab ? "blue" : "#535B64"}}
                          onClick={() => {
                              selectTabs(index)
                          }}
                    > {movieTabs}
                   </span>
                ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-content-center">
                {movies?.results?.map(movie => (

                    <div className="w-[200px] h-[300px] bg-[red] mt-6 rounded-5 " style={{background: `url( ${`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}) no-repeat center/contain`}}>
                        <div className="flex items-end">
                        <div className="mt-[140%] ml-3 w-[50px] h-[50px] bg-[#2A3EBF] rounded-full  position-relative flex items-center justify-content-center ">
                            <div className="border-amber-300 position-absolute w-[40px] h-[40px] bg-[black]  flex items-center justify-content-center  rounded-full text-white text-sm" >
                            {`${movie.vote_average}%`}
                            </div>
                        </div>
                        <button className="px-[10px] py-[4px]  ml-4 mb-2 rounded-2  border-blue-600 border-2 font-semibold bg-[#2A3EBF] text-white ">
                        Watch Now
                        </button>
                    </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;