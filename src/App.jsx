import { Outlet } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
// import Footer from "./components/shared/Footer"

function App() {
    return (
        <>
            <div className="h-screen overflow-y-scroll">
                <Navbar />
                <Outlet />
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default App
