import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import './style.css'

const MovieDetails = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState()
    const [moviePerson, setMoviePerson] = useState()
    useEffect(() => {
        getPerson()
    })
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU`)
            .then(({data}) => {
                setMovie(data)
                console.log(data)
            })
    }, [id])

    function getPerson() {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU`)
            .then(({data}) => {
                setMoviePerson(data)
                console.log(data)
            })
    }

    return (
        <div>
            <div className="movie w-[1000px] h-[600px] rounded-5 position-relative"
                 style={{background: `url( ${`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`}) no-repeat center/contain`}}
            >
            </div>
            <div className="flex  position-absolute top-[100px] ">
                <img className="rounded-5 w-[300px]"
                     src={`https://image.tmdb.org/t/p/w1280/${movie?.poster_path}`}
                     alt="img"
                />
                <div>
                    <h2 className="text-white ml-[100px]">
                        {movie?.title}
                    </h2>
                    <p className="w-[600px] ml-[100px] text-white">{movie?.overview}</p>
                    <p className="ml-[100px] text-white">{`Дата выхода.${movie?.release_date}`}</p>
                    <p className="ml-[100px] text-white">{`Популярность.${movie?.popularity}`}</p>
                    <p className="ml-[100px] text-white">{`Жанр.${movie?.genres[1]?.name}`}</p>
                </div>

            </div>
            <div className="mt-[50px]"><h1>В главны ролях</h1></div>
            <div className="flex gap-2 max-w-[1000px] overflow-x-scroll">
            {
                moviePerson?.cast.map((person) => person?.profile_path &&(
                    <div className=" border-1  min-w-[200px]">
                        <img className="w-[200px]  "
                             src={`https://image.tmdb.org/t/p/w1280/${person?.profile_path}`}
                             alt="img"

                        />
                        <p className="ml-[10px] text-base">
                            {person?.name}
                        </p>
                    </div>

                ))
            }
            </div>
        </div>
    );
};

export default MovieDetails;