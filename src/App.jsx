import { Outlet } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
// import Footer from "./components/shared/Footer"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

function App() {
    return (
        <>
            <ToastContainer />
            <div className="h-screen overflow-y-scroll">
                <Navbar />
                <Outlet />
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default App
