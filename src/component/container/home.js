import {useEffect} from 'react'
import { useStore } from "../../store"
import Banner from './banner'
import Gallery from "./gallery"
function Home () {
    const data = useStore()
    const moviePopular = data.moviePopular
    const movieTopRated = data.movieTopRated

    useEffect (() => {
        moviePopular.getMoviePopular(1)
        movieTopRated.getMovieTopRated(1)
    }, [])
    return (
        <div>
            <Banner/>
            <Gallery 
                data = {moviePopular.moviePopular}
                title = "Những bộ phim mọi người xem nhiều"
            />
            <Gallery 
                data = {movieTopRated.movieTopRated}
                title = "Những bộ phim được xếp hạng cao"
            />
        </div>
    )
}

export default Home