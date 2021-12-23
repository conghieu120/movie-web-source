import Item from './item'

const Gallery = ({data, title}) => {
    const results = data.results
    let list
    if (results) {
    list = results.map(movie => (
        <Item key = {movie.id} movie = {movie}/>
    ))
    }
    
    return (
        <div className ="gallery grid wide">
            <h3 className= "col">{title}</h3>
            <div className = "row">
                {results? list : <p>Loading...</p>}
            </div>
        </div>
    )
}

export default Gallery