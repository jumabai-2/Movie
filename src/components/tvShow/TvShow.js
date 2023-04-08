import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "../ui/card/Card";
import {useNavigate} from "react-router-dom";

const TvShow = () => {
const [movie ,setMovie] = useState()
    const navigate = useNavigate()
    function clickButton(){
    navigate(`/movie-details${movie?.id}`)
    }
    useEffect(()=>{
        axios("https://api.themoviedb.org/3/tv/popular?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU&page=1")
            .then(({data})=>{
                setMovie(data)
                console.log(data)
            })
    },[])
    return (
        <>
            {movie?.results.map((item,key) => (
                <div>
                    <Card movie={item}/>
                </div>
            ))}

        </>
    );
};

export default TvShow;