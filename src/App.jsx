import { Outlet } from "react-router-dom"

function App() {
    return (
        <>
            <div className="h-screen">
                <h1>This is the header part</h1>
                <Outlet />
                <footer>
                    <h3>This is the footer part</h3>
                </footer>
            </div>
        </>
    )
}

export default App
