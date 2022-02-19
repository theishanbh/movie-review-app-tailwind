import axios from "axios"
import { useState,useEffect } from "react"
import Footer from "../../components/Footer"
import SearchList from "../../components/SearchList"
import Topbar from "../../components/Topbar"

const Trending = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('https://movie-review-app-1.herokuapp.com/trending')
        .then((response) => {
            if(typeof response.data === "object"){
                setMovies(response.data)
            }
        })
        .catch(( error) => {
            console.log(error);
        });
    }, [])
    return (
        <>
            <Topbar></Topbar>
            <h1 className="text-center my-12 text-3xl font-black">TRENDING MOVIES</h1>
            <SearchList movies={movies} watched={true}></SearchList>
            <Footer></Footer>
        </>
    )
}

export default Trending
