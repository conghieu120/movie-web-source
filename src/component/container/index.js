import {Routes, Route} from 'react-router-dom'
import Genres from './genres'
import Gallery from './gallery'
import { useStore } from "../../store"
import Movie from './movie'
import MovieGenre from './movieGenre'

import Home from './home'

const Container = () => {
    const data = useStore()    

    const genres = data.genres
    const movieGenre = data.movieGenre
    const searchResults = data.search.searchResults

    return (
        <div className = "grid">
                <Genres/>
                <Routes>
                    <Route path = "/" element = {<Home/>}/>  
                    {genres.map(genre => (
                        <Route
                            key = {genre.id} 
                            path = {`/${genre.id}`} 
                            element = {<MovieGenre title = {genre.name}/>}
                        />  
                    ))}
                    <Route path = "/search" element = {<Gallery title = "Kết quả tìm kiếm" data = {searchResults} />} />         
                    <Route path = "/movie" element = {<Movie/>}/>         
                </Routes>
        </div>
    )
}

export default Container