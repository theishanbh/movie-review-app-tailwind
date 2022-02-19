import React, { FC, Fragment } from 'react'
import Movie from '../Movie'


interface movieDetails{
    poster_path : string;
    title : string;
    id : number;
    release_date : string;
    vote_average : number;
    vote_count : number;
    popularity: number;
}

interface props{
    movies: Array<movieDetails>;
    watched: boolean;
}



const SearchList = (props:props) => {
    return (
        <div className="mx-20">
            <div className="flex flex-wrap items-center content-center overflow-hidden">
                {
                    props.movies.map((movie:movieDetails, index:Number) => {
                        return(
                            <Fragment>
                                <Movie key={index} image={movie.poster_path} title={movie.title} date={movie.release_date} popularity={movie.popularity} vote_count={movie.vote_count} vote_average={movie.vote_average} id ={movie.id} watched={props.watched}></Movie>
                            </Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchList
