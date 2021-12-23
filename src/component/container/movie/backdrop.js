

function Backdrop ({backdrop}) {
    const img = `https://image.tmdb.org/t/p/original${backdrop}`
    return (
        <div className = "gird backdrop">
            <img alt = "backdrop" src = {img}/>
        </div>
    )
}


export default Backdrop
