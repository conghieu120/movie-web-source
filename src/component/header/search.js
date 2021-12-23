import { Link } from "react-router-dom"
import {useState} from 'react'
import { useStore} from '../../store'


const Search = () => {
    const [inputVal, setInputVal] = useState()
    const store = useStore()
    const setQuery = store.search.setQuery

    return (
        <div className = "search">
            <input 
                placeholder ="Nhập từ khóa..."
                value = {inputVal}
                onChange = {e => setInputVal(e.target.value)}
            />
            
            {
                inputVal ? <Link to = "/search">
                <img 
                    alt = "search" 
                    src = "https://www.svgrepo.com/show/19021/search.svg"
                    onClick = {() => setQuery(inputVal)}
                />
            </Link> : <div></div>
            }
        </div>
    )
}

export default Search