import axios from "axios"
import { useState,useEffect } from "react"
import Footer from "../../components/Footer"
import SearchList from "../../components/SearchList"
import Topbar from "../../components/Topbar"

const Search = () => {
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.post('https://movie-review-app-1.herokuapp.com/search', {
            search: `${search}`
        })
        .then((response) => {
            if(typeof response.data === "object"){
                setMovies(response.data)
            }
        })
        .catch(( error) => {
            console.log(error);
        });
    }, [search])

    return (
        <>
            <Topbar></Topbar>
            <div className="py-4 relative mx-auto text-gray-600 text-center">
                <input 
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" 
                    type="search" 
                    name="search" 
                    placeholder="Search" 
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                />
            </div>
            <SearchList movies={movies} watched={true}></SearchList>
            <Footer></Footer>
        </>
    )
}

export default Search
