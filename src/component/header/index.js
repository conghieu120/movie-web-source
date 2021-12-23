import Logo from "./logo"
import Search from "./search"

function Header () {
    return (
        <div className = "header grid">
            <div className = "grid wide">
                <Logo/>
                <Search/>
            </div>
        </div>
    )
}

export default Header