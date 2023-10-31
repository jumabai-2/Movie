import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Celebs = () => {
    // const navigate = useNavigate()
    // function clickButton(){
    //     navigate(`/movie-details/${movie.id}`)
    // }
    const [movie, setMovie] = useState({})

    useEffect(() => {
        getCelebs()
    }, [])

    function getCelebs() {
        axios.get("https://api.themoviedb.org/3/person/popular?api_key=f42c53f4f985e0480ab807c5d464b681&language=en-US&page=1")
            .then(({data}) => {
                setMovie(data)
                console.log(data)
            })
    }

    return (
        <>
            <h1>Известные актеры</h1>
            <div className="flex flex-wrap items-center justify-between">
            {movie?.results?.map(movies => (
                <div >
                <div className="w-[200px] h-[300px] bg-[red] mt-10 rounded-5"
                     style={{
                         background: `url( ${`https://image.tmdb.org/t/p/w1280/${movies?.profile_path}`}) no-repeat center/contain`
                }}
                     // onClick={clickButton}
                >
                </div>
                </div>
            ))}
            </div>
        </>
    );
};

export default Celebs;