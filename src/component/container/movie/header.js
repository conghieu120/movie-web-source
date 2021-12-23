import Poster from './poster'
import Conten from './conten'

function Header ({movie}) {
    return (
        <div className = "grid movie-header">
            <div className = "grid wide">
                <div className = "row">
                    <Poster movie = {movie}/>
                    <Conten movie = {movie}/>
                </div>
            </div>
        </div>
    )
}

export default Header