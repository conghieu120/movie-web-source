import {useEffect} from 'react'
import { useStore} from '../../../store'
import Header from './header'
import Actor from './actor'
import Backdrop from './backdrop'

function Movie () {
    const store = useStore()
    const movie = store.movie
    const getMovie = movie.getMovie
    const getActor = movie.getActor
    const movieID = movie.movieID

    useEffect (() => {
        getMovie(movieID)
        getActor(movieID)
    }, [movieID])

    return (
        <div>
            <Header movie = {movie.movie}/>        
            <Actor actors = {movie.actor}/>
            <Backdrop backdrop = {movie.movie.backdrop_path}/>
        </div>
    )
}

export default Movie