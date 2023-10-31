import React from 'react';
import {useSearchParams} from "react-router-dom";
import SearchBlock from "../../components/searchBlock/SearchBlock";
import Home from "../home/Home";

const Discover = () => {
    let [searchParams, setSearchParams] = useSearchParams()
    function searchMovie(value){
        setSearchParams(`search=${value}`)
    }
    const searchValue = searchParams.get("search")

    return (

        <div>
            <div>
            <input type="text" placeholder="Найти что-то" className="w-[800px] h-[50px] border-1 outline-none pl-[5px] mt-[10px] rounded-3xl bg-[#DBE9F7] "
                   onChange={(e) => {searchMovie(e.target.value)}}
                   value={searchValue}
            />
            </div>
            {searchValue ? <SearchBlock/> : <Home/>}
        </div>

    );
};

export default Discover;