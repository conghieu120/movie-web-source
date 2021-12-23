
function Conten ({movie}) {
    let genres = ''
    
    if (movie.genres) {
        genres = movie.genres.map(genre => (
            <span className = "movie-genre">{genre.name}&nbsp;</span> 
        ))
    }
    return (
        <div className = "content col l-9 m-8 c-12">
            <h2>{movie.title}</h2>
            <p>({movie.original_title})</p>
            <div className = "play-movie">
                <a rel="noreferrer" target="_blank" href = {movie.homepage}>Xem Phim</a>
            </div>
            <p>Thời gian: {movie.runtime} Phút</p>
            <p>{movie.overview}</p>
            <p>Thể loại: {genres}</p>
            <p>Lượt xem: {movie.popularity}</p>

        </div>
    )
}

export default Conten