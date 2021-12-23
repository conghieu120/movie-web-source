import {Link} from 'react-router-dom'

import {useStore} from '../../store'

const Item = ({movie}) => {
    const data = useStore()
    const setMovieId = data.movie.setMovieId

    const img = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <div className = "item col c-6 m-4 l-3">
            <div className = "item-img">
                <Link onClick = {() => setMovieId(movie.id)} to = "/movie">
                    <img src = {img} alt = "hello"/>
                </Link>
            </div>
            <Link onClick = {() => setMovieId(movie.id)} to = "/movie">
                <p>{movie.title}</p>
            </Link>
        </div>
    )
}

export default Item