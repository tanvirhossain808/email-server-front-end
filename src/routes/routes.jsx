import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import AuthWrapper from "../components/AuthWraper/AuthWraper"
import App from "../App"
import SecondHomePage from "../pages/SecondHomePage"
import AuthForm from "../pages/Auth/AuthForm"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: (
                    <AuthWrapper isAuthPage={false} path="/" key={1}>
                        <Home />
                    </AuthWrapper>
                ),
            },
            { path: "/second", element: <SecondHomePage key={2} /> },
            {
                path: "/auth",
                element: (
                    <AuthWrapper isAuthPage={true} path="/auth" key={3}>
                        <AuthForm />,
                    </AuthWrapper>
                ),
            },
        ],
    },
])

export default router
