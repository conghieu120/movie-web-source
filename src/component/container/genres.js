import {Link} from 'react-router-dom'
import {useStore} from '../../store'

function Genres () {    
    const data = useStore()  
    
    const genres = data.genres
    const movieGenre = data.movieGenre
    const setGenreId = movieGenre.setGenreId
    return (
        <div className = "genres">     
                {genres.map(genre => (
                    <li className = "genre" key = {`/${genre.id}`}>
                        <Link onClick = {() => {setGenreId(genre.id)}} id = {genre.id} to = {`/${genre.id}`}>{genre.name}</Link> 
                    </li>
                ))}
        </div>
    )
} 

export default Genres