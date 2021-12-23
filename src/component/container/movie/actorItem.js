

function ActorItem ({actor}) {
    const img = `https://image.tmdb.org/t/p/w500${actor.profile_path}`
    return (
            <div className = "col c-3 m-2 l-2">
                <img alt = {actor.name} src = {img}/>
                <p>{actor.name}</p>
            </div>
        )
}

export default ActorItem