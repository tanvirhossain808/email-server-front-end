import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import App from "../App"
import SecondHomePage from "../pages/SecondHomePage"
import AuthForm from "../pages/Auth/AuthForm"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/second", element: <SecondHomePage /> },
            {
                path: "/auth",
                element: <AuthForm />,
            },
        ],
    },
])

export default router
