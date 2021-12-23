import Contact from "./contact"
import About from './about'
import Legal from './legal'
import Hi from './hi'

function Footer () {
    return (
        <div className = "footer grid">
            <div className = "grid wide">
                <div className = "row">
                    <Hi/>
                    <Contact/>
                    <About/>
                    <Legal/>
                </div>
            </div>
        </div>
    )     
}

export default Footer