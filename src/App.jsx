import { Outlet } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
// import Footer from "./components/shared/Footer"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

function App() {
    return (
        <>
            <ToastContainer />
            <div className="h-screen">
                <div className="h-[60px] w-full top-0 sticky">
                    <Navbar />
                </div>
                <Outlet />
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default App
