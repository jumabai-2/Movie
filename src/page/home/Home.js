import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "../../components/ui/card/Card";
import Banner from "../../components/ui/banner/Banner";
import Pagination from "../../components/ui/pagination/Pagination";
import Spiner from "../../svg/Spiner";
import TvShow from "../../components/tvShow/TvShow";
import BannerTv from "../../components/ui/bannerTv/BannerTv";

const Home = () => {
    const [movies, setMovies] = useState([])
    const [selectedTab, setSelectedTab] = useState(0)
    const [movieBanner, setMovieBanner] = useState({})
    const [movieBannerTv, setMovieBannerTv] = useState({})
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        getMovieTv()
        getPopularMovies()
    }, [page])


    function getPopularMovies() {
        const randomNumber = Math.floor(Math.random() * 20)
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU&page=${page}`)
            .then(({data}) => {
                setMovieBanner(data.results[randomNumber])
                setMovies(data)
                setLoading(false)
                console.log(data)
            })
    }

    function getMovieTv() {
        const randomNumber = Math.floor(Math.random() * 20)
        axios("https://api.themoviedb.org/3/tv/popular?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU&page=1")
            .then(({data}) => {
                setMovieBannerTv(data.results[randomNumber])
            })
    }

    const movieTabs = ["Movie", "TV Show", "Anime"]

    function selectTabs(index) {
        setSelectedTab(index)
    }
    return (
        <div>
            <div className="mt-6 flex items-center gap-6 text-lg">
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
            {loading ? <Spiner/> : selectedTab === 0 &&
                <>
                    <div>
                        <Banner movie={movieBanner}/>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-content-center">
                        {movies?.results.filter(el => el?.poster_path).map((movie) => (
                            <Card movie={movie}/>
                        ))}
                    </div>
                </>
            }
            {loading ? <Spiner/> : selectedTab === 1 &&
                <>
                    <BannerTv movie={movieBannerTv}/>
                    <div className="flex flex-wrap justify-content-center gap-3">
                        <TvShow/>
                    </div>
                </>

            }
            <div className="mt-[30px] ml-[100px]">
            <Pagination
                currentPage={page}
                allPages={movies.total_pages}
                onChangePage={(page) => setPage(page)}
            />
        </div>
        </div>
    );
};

export default Home;