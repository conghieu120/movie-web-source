
function Poster ({movie}) {
    const img = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <div className = "col l-3 m-4 c-12">
            <img alt = {movie.title} src = {img}/>
        </div>
    )
}

export default Poster