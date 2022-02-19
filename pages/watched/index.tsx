import axios from "axios"
import { useEffect, useState } from "react"
import Footer from "../../components/Footer"
import SearchList from "../../components/SearchList"
import Topbar from "../../components/Topbar"

const Watched = () => {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)

    useEffect(() => {
        axios.post('https://movie-review-app-1.herokuapp.com/watchlist',{
            page: currentPage
        })
        .then((response) => {
            console.log("done")
            setMovies(response.data.results)
            setTotalPage(response.data.totalPage)
            
        })
        .catch(( error) => {
            console.log(error);
        });
    }, [currentPage])

    const handleLeftPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleRightPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1)
        }
    }
    return (
        <>
            <Topbar></Topbar>
            <h1 className="text-center my-12 text-3xl font-black">WATCHED MOVIES</h1>
            <SearchList movies={movies} watched={false}></SearchList>
            <div className="flex py-4 items-center content-center text-center justify-center">
                <button
                    type="button"
                    className=""
                    onClick={handleLeftPage}
                >
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/left.png" alt="left"/>
                </button>
                <p>{currentPage} / {totalPage}</p>
                <button
                    type="button"
                    onClick={handleRightPage}
                >
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/right--v1.png" alt="right"/>
                </button>
                    
                
            </div>

            <Footer></Footer>
        </>
    )
}

export default Watched
