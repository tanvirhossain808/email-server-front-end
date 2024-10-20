import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import App from "../App"
import SecondHomePage from "../pages/SecondHomePage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/second", element: <SecondHomePage /> },
            // Add more routes as needed
        ],
    },
])

export default router
