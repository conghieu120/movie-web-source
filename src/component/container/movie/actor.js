import ActorItem from "./actorItem";

function Actor ({actors}) {
    let actorList = ''
    if (actors) {
        actorList = actors.cast.map(actor => (
            <ActorItem actor = {actor}/>
        ))
    }

    return (        
            <div className ="grid wide">
                <h2>Các diễn viên chính</h2>
                <div>
                    <div className = "actor-item row">
                        {actors ? actorList : <p>Loading...</p>}
                    </div>
                </div>           
            </div>
    )
}

export default Actor