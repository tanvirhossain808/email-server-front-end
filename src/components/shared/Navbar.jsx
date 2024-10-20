import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <h1>This is the navigation bar</h1>
            <ul className="flex items-center justify-between">
                <Link to={"/"}>Home</Link>
                <Link to={"/second"}>Second</Link>
                <Link to={"/auth"}>auth</Link>
            </ul>
            <hr />
            {/* Add more navigation items here */}
        </div>
    )
}

export default Navbar
