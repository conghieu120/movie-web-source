import { createContext,useEffect, useState} from 'react'

import {api_key} from '../api'
import useStore from './hooks'

const MovieContext  = createContext()

function StoreContext ({children}) {

    const initMovie = {
        page: 1, 
        results: [],
        total_pages: 500, 
        total_results: 10000
    }

    const [genres, setGenres] = useState([])
    const [moviePopular, setMoviePopular] = useState(initMovie)
    const [movieTopRated, setMovieTopRated] = useState(initMovie)
    const [searchResults, setSearchResults] = useState(initMovie)
    const [movieGenre, setMovieGenre] = useState(initMovie)
    const [genreId, setGenreId] = useState("")
    const [query, setQuery] = useState('')
    const [movie, setMovie] = useState([])
    const [movieID, setMovieId] = useState('')
    const [actor, setActor] = useState()

    const getMovie = (movieID) => {
        fetch (`
        https://api.themoviedb.org/3/movie/${movieID}?api_key=${api_key}&language=vi`)
        .then (res => res.json())
        .then (res => setMovie(res))
        .catch (err => console.log(err))
    }

    const getActor = (movieID) => {
        fetch (`
        https://api.themoviedb.org/3/movie/${movieID}/casts?api_key=${api_key}`)
        .then (res => res.json())
        .then (res => setActor(res))
        .catch (err => console.log(err))
    }

    const getGenres = () => {
        fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=vi`)
        .then (res => res.json())
        .then (res => setGenres(res.genres))
        .catch (err => console.log(err))
    }

    const getMoviePopular = (page) => {
        fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=vi&page=${page}`)
        .then (res => res.json())
        .then (res => setMoviePopular(res))
        .catch (err => console.log(err))
    }

    const getMovieTopRated = (page) => {
        fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=vi&page=${page}`)
        .then (res => res.json())
        .then (res => setMovieTopRated(res))
        .catch (err => console.log(err))
    }

    const searchMovie = query => {
        fetch (`
        https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=vi&query=${query}&page=1&include_adult=false`)
        .then (res => res.json())
        .then (res => setSearchResults(res))
        .catch (err => console.log(err))
    }

    const getMovieGenre = genreId => {
        fetch (`
        https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${genreId}`)
        .then (res => res.json())
        .then (res => setMovieGenre(res))
        .catch (err => console.log(err))
    }
    
    useEffect (() => {
       getGenres()
    }, [])
    
    useEffect (() => {
        getMovieGenre(genreId)        
    }, [genreId])

    useEffect (() => {
        searchMovie(query)        
    }, [query])  

    const data = {
        genres: genres,
        moviePopular: {moviePopular, getMoviePopular},
        movieTopRated: {movieTopRated, getMovieTopRated},
        search: {searchResults, setQuery},
        movieGenre: {movieGenre, setGenreId, genreId ,getMovieGenre},
        movie: {movie, setMovieId, movieID , actor, getMovie, getActor}
    }

    return (
        <MovieContext.Provider value = {data}>
            {children}
        </MovieContext.Provider>
    )
}

export default StoreContext
export {MovieContext, useStore}
