import axios from "axios"
import { useState } from "react"
import Footer from "../../components/Footer"
import Topbar from "../../components/Topbar"

interface movieLeft {

}

const Comparison = () => {

    const [searchLeft, setSearchLeft] = useState("") // used for search bar
    const [moviesLeft, setMoviesLeft] = useState([]) // used for movie slider
    const [moviesLeftCompare, setMoviesLeftCompare] = useState({}) // used to store info once + button is clicked

    const handleChangeLeft = () => {
        axios.post('https://movie-review-app-1.herokuapp.com/search', {
            search: `${searchLeft}`
        })
        .then((response) => {
            setMoviesLeft(response.data)
        })
        .catch(( error) => {
            console.log(error);
        });
        
    }
    const leftCompare = (id:number) => {
        axios.post('https://movie-review-app-1.herokuapp.com/movie', {
            id: `${id}`
        })
        .then((response) => {
            console.log(response.data);
            setMoviesLeftCompare(response.data)
        })
        .catch(( error) => {
            console.log(error);
        });
    }

    const [searchRight, setSearchRight] = useState("") // used for search bar
    const [moviesRight, setMoviesRight] = useState([]) // used for movie slider
    const [moviesRightCompare, setMoviesRightCompare] = useState({}) // used to store info once + button is clicked

    const handleChangeRight = () => {
        axios.post('https://movie-review-app-1.herokuapp.com/search', {
            search: `${searchRight}`
        })
        .then((response) => {
            setMoviesRight(response.data)
        })
        .catch(( error) => {
            console.log(error);
        });
        
    }
    const rightCompare = (id:number) => {
        axios.post('https://movie-review-app-1.herokuapp.com/movie', {
            id: `${id}`
        })
        .then((response) => {
            setMoviesRightCompare(response.data)
            console.log(response.data)
        })
        .catch(( error) => {
            console.log(error);
        });
    }
    return (
        <>
            <Topbar></Topbar>
            <h1 className="text-center mt-12 text-3xl font-black">WATCHED MOVIES</h1>
            <div className="flex justify-center text-center">
                {/* left block */}
                <div className="flex flex-col flex-1 my-12 w-1/2 overflow-x-hidden">
                    <h1 className="text-lg">CHOOSE MOVIE TO COMPARE</h1>
                    <div className="py-4 relative mx-auto text-gray-600 text-center">
                        <form 
                            onSubmit ={e => e.preventDefault()}
                        >
                            <input 
                                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                type="text" 
                                placeholder="Search"
                                id="search"
                                value={searchLeft}
                                onChange={(e) => {
                                    setSearchLeft(e.target.value)
                                    handleChangeLeft()
                                }}
                            />
                        </form>
                    </div>
                    <div className="flex px-20 items-center overflow-x-scroll">
                        {
                            typeof moviesLeft === "object" &&
                            moviesLeft.map((movie:any, index:number) => {
                                return(
                                    <div className="flex p-12">
                                        <div className="relative h-56 w-40">
                                            {
                                                movie.poster_path == null ? 
                                                <img 
                                                    src="https://www.medstartr.com/main/images/no-image.png" 
                                                    alt="no img" 
                                                    className="h-56 w-40 object-cover" 
                                                /> 
                                                : 
                                                <img 
                                                    src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                                    alt="no img" 
                                                    className="h-56 w-40 object-cover"
                                                />
                                            }
                                            <div className="absolute top-1/4 left-1/4 bg-transparent text-center">
                                                <input 
                                                    className="text-white h-30 w-35 focus:outline-none text-9xl font-black"
                                                    type="button" 
                                                    placeholder="Search"
                                                    id="search"
                                                    value= "+"
                                                    onClick={() => {leftCompare(movie.id)}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-col items-center">
                    {
                        moviesLeftCompare.title &&
                        <h1 className="font-extrabold text-4xl my-4 underline decoration-dotted">{moviesLeftCompare.title}</h1>
                    }
                    {
                        moviesLeftCompare.release_date &&
                            <div className="flex h-8 my-1 content-center items-center">
                                <div className="h-auto px-2 font-semibold text-2xl">RELEASE DATE </div>
                                <img src="./Assets/Images/dateicon.png" alt="date icon" className="h-4/5"/>
                                <div className="h-auto px-2 font-semibold text-2xl text-gray-500"> {moviesLeftCompare.release_date}</div>
                            </div>
                    }
                    {
                        moviesLeftCompare.vote_average &&
                            <div className="flex h-8 my-1 content-center items-center">
                                <div className="h-auto px-2 font-semibold text-2xl">RATING </div>
                                <img src="./Assets/Images/staricon.png" alt="star icon" className="h-4/5"/>
                                <div className="h-auto px-2 font-semibold text-2xl text-gray-500"> {moviesLeftCompare.vote_average}</div>
                            </div>
                    }
                    {
                        moviesLeftCompare.vote_count &&
                            <div className="flex h-8 my-1 content-center items-center">
                                <div className="h-auto px-2 font-semibold text-2xl">VOTE COUNT </div>
                                <img src="./Assets/Images/personicon.png" alt="star icon" className="h-4/5" />
                                <div className="h-auto px-2 font-semibold text-2xl text-gray-500"> {moviesLeftCompare.vote_count}</div>
                            </div>
                    }
                    {
                        moviesLeftCompare.runtime &&
                            <div className="flex h-8 my-1 content-center items-center">
                                <div className="h-auto px-2 font-semibold text-2xl"> RUNTIME </div>
                                <img src="./Assets/Images/movieicon.png" alt="star icon" className="h-4/5" />
                                <div className="h-auto px-2 font-semibold text-2xl text-gray-500"> {(moviesLeftCompare.runtime/60).toFixed().toString() + " hours " + (moviesLeftCompare.runtime%60).toFixed().toString() + " minutes" }</div>
                            </div>
                    }
                    {
                        moviesLeftCompare.popularity &&
                            <div className="flex h-8 my-1 content-center items-center">
                                <div className="h-auto px-2 font-semibold text-2xl">POPULARITY</div>
                                <img src="./Assets/Images/popularityicon.png" alt="star icon" className="h-4/5" />
                                <div className="h-auto px-2 font-semibold text-2xl text-gray-500"> {moviesLeftCompare.popularity}</div>
                            </div>
                    }
                    {
                        moviesLeftCompare.genres &&
                            <div className="flex h-8 my-1 content-center items-center">
                                <div className="h-auto px-2 font-semibold text-2xl">GENRES</div>
                                <img src="./Assets/Images/genreicon.png" alt="star icon" className="h-4/5" />
                                <div className="h-auto px-2 font-semibold text-2xl text-gray-500">
                                { 
                                    moviesLeftCompare.genres.map((element) => (
                                        (element.name +" ").toString()
                                    ))
                                }
                                </div>
                            </div>
                    }
                    </div>
                </div>
                {/* right block */}
                <div className="flex flex-col flex-1 my-12 w-1/2 overflow-x-hidden border-l-4 border-slate-400">
                    <h1 className="text-lg">CHOOSE MOVIE TO COMPARE</h1>
                    <div className="py-4 relative mx-auto text-gray-600 text-center">
                        <form 
                            onSubmit ={e => e.preventDefault()}
                        >
                            <input 
                                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                type="text" 
                                placeholder="Search"
                                id="search"
                                onChange={(e) => {
                                    setSearchRight(e.target.value)
                                    handleChangeRight()
                                }}
                            />
                        </form>
                    </div>
                    <div className="flex px-20 items-center overflow-x-scroll ">
                        {
                            typeof moviesRight === "object" &&
                            moviesRight.map((movie:any, index:number) => {
                                return(
                                    <div className="flex p-12">
                                        <div className="relative h-56 w-40">
                                            {
                                                movie.poster_path == null ? 
                                                <img 
                                                    src="https://www.medstartr.com/main/images/no-image.png" 
                                                    alt="no img" 
                                                    className="h-56 w-40 object-cover" 
                                                /> 
                                                : 
                                                <img 
                                                    src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                                    alt="no img" 
                                                    className="h-56 w-40 object-cover" 
                                                />
                                            }
                                            <div className="">
                                                <input 
                                                    // className="border-2 text-white border-gray-300 h-35 w-35 focus:outline-none text-9xl font-black bg-green-400 rounded-full"
                                                    type="button" 
                                                    placeholder="Search"
                                                    id="search"
                                                    value= "+"
                                                    onClick={() => {rightCompare(movie.id)}}
                                                />
                                            </div>
                                            <div className="">
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-col items-center">
                    {
                        moviesRightCompare.title &&
                        <h1 className="font-extrabold text-4xl my-4 underline decoration-dotted">{moviesRightCompare.title}</h1>
                    }
                    {
                        moviesRightCompare.release_date &&
                            <div className="flex h-8 my-1 content-center items-center">
                                <div className="h-auto px-2 font-semibold text-2xl">RELEASE DATE </div>
                                <img src="./Assets/Images/dateicon.png" alt="date icon" className="h-4/5" />
                                <div className="h-auto px-2 font-semibold text-2xl text-gray-500"> {moviesRightCompare.release_date}</div>
                            </div>
                    }
                    {
                        moviesRightCompare.vote_average &&
                            <div className="flex h-8 my-1 content-center items-center">
                                <div className="h-auto px-2 font-semibold text-2xl">RATING </div>
                                <img src="./Assets/Images/staricon.png" alt="star icon" className="h-4/5" />
                                <div className="h-auto px-2 font-semibold text-2xl text-gray-500"> {moviesRightCompare.vote_average}</div>
                            </div>
                    }
                    {
                        moviesRightCompare.vote_count &&
                            <div className="flex h-8 my-1 content-center items-center">
                                <div className="h-auto px-2 font-semibold text-2xl">VOTE COUNT </div>
                                <img src="./Assets/Images/personicon.png" alt="star icon" className="h-4/5" />
                                <div className="h-auto px-2 font-semibold text-2xl text-gray-500"> {moviesRightCompare.vote_count}</div>
                            </div>
                    }
                    {
                        moviesRightCompare.runtime &&
                            <div className="flex h-8 my-1 content-center items-center">
                                <div className="h-auto px-2 font-semibold text-2xl"> RUNTIME </div>
                                <img src="./Assets/Images/movieicon.png" alt="star icon" className="h-4/5" />
                                <div className="h-auto px-2 font-semibold text-2xl text-gray-500"> {(moviesRightCompare.runtime/60).toFixed().toString() + " hours " + (moviesRightCompare.runtime%60).toFixed().toString() + " minutes" }</div>
                            </div>
                    }
                    {
                        moviesRightCompare.popularity &&
                            <div className="flex h-8 my-1 content-center items-center">
                                <div className="h-auto px-2 font-semibold text-2xl">POPULARITY</div>
                                <img src="./Assets/Images/popularityicon.png" alt="star icon" className="h-4/5" />
                                <div className="h-auto px-2 font-semibold text-2xl text-gray-500"> {moviesRightCompare.popularity}</div>
                            </div>
                    }
                    {
                        moviesRightCompare.genres &&
                            <div className="flex h-8 my-1 content-center items-center">
                                <div className="h-auto px-2 font-semibold text-2xl">GENRES</div>
                                <img src="./Assets/Images/genreicon.png" alt="star icon" className="h-4/5" />
                                <div className="h-auto px-2 font-semibold text-2xl text-gray-500">
                                { 
                                    moviesRightCompare.genres.map((element) => (
                                        (element.name +" ").toString()
                                    ))
                                }
                                </div>
                            </div>
                    }
                    </div>
                
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Comparison
