import './App.css';
import { Routes,Route } from "react-router-dom";
import Layout from './components/loyout/Layout'
import Home from "./page/home/Home";
import Community from "./page/community/Community";
import Discover from "./page/discover/Discover";
import MovieDetails from "./page/moviDetails/MovieDetails";
function App() {
    return (
        <>
            <Layout>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movie-details/:id' element={<MovieDetails/>}/>
                <Route path='/community' element={<Community/>}/>
                <Route path='/discover' element={<Discover/>}/>
            </Routes>
            </Layout>
</>
    );
}

export default App;
