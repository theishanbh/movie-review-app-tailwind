import axios from 'axios';
import React from 'react'

const Movie = (props:any) => {
    const handleWatched = () => {
        console.log(props.id)
        axios.post('https://movie-review-app-1.herokuapp.com/addwatched',{
            id: props.id
        }).then(() => console.log("add watched"))
        .catch(( error) => {
            console.log(error);
        });
    }

    const handleRemove = () => {
        console.log(props.id)
        axios.post('https://movie-review-app-1.herokuapp.com/removewatched',{
            id: props.id
        }).then(()=> console.log("remove"))
        .catch(( error) => {
            console.log(error);
        });
    }
    return (
        <>
            <div className="flex relative p-8 basis-1/4 hover:bg-gray-300">
                <div className="h-56 w-40">
                    {
                        props.image == null ? <img src="https://www.medstartr.com/main/images/no-image.png" alt="no img" className="" /> : <img src= {`https://image.tmdb.org/t/p/w500${props.image}`} alt="no img" className="h-56 w-40 object-cover block" />
                    }
                </div>
                <div className="flex flex-col pl-4 justify-start">
                    <span className="font-extrabold text-base underline mb-2">{props.title}</span>
                    <div className="flex h-8 items-center content-center">
                        <img src="./Assets/Images/dateicon.png" alt="date icon" className="h-4/5"/>
                        <div className="text-base font-normal ml-1 h-auto px-1"> {props.date}</div>
                    </div>
                    <div className="flex h-8 items-center content-center">
                        <img src="./Assets/Images/staricon.png" alt="star icon" className="h-4/5"/>
                        <div className="text-base font-semibold ml-1 h-auto px-1"> {props.vote_average}</div>
                    </div>
                    <div className="flex h-8 items-center content-center">
                        <img src="./Assets/Images/personicon.png" alt="star icon" className="h-4/5"/>
                        <div className="ml-1 h-auto px-1 text-base font-semibold"> {props.vote_count}</div>
                    </div>
                    {
                        props.watched ?
                            <input
                                type="button"
                                value="ADD TO WATCHED"
                                className = "text-base w-40 p-1 m-1 bg-green-400 border-2 border-solid border-black rounded-lg shadow-slate-500 font-bold mt-auto hover:bg-green-700 cursor-pointer"
                                onClick={handleWatched}
                            /> :
                            <input
                                type="button"
                                value="REMOVE"
                                className="text-base w-40 p-1 m-1 bg-red-500 border-2 border-solid border-black rounded-lg shadow-slate-500 font-bold mt-auto hover:bg-red-700 cursor-pointer"
                                onClick={handleRemove}
                            />
                    }
                </div>
                
            </div>
        </>
    )
}

export default Movie
