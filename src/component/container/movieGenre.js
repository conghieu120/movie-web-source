import {useEffect} from 'react'
import { useStore } from "../../store"
import Gallery from "./gallery"


function MovieGenre ({title}) {
    const data = useStore()
    const movieGenre = data.movieGenre
    const genreId = movieGenre.genreId
    console.log(genreId);
    useEffect (() => {
        movieGenre.getMovieGenre(genreId)
    }, [genreId])
    return (
        <div>
            <Gallery data = {movieGenre.movieGenre} title = {title}/>
        </div>
    )
}

export default MovieGenre