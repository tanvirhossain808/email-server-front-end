import axios from "axios"
import { useState } from "react"
import { restServerApi } from "../../constant/api"
import { useNavigate } from "react-router-dom"
const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true) // Toggle between Login and Signup
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isLogin) {
            try {
                const res = await axios.post(
                    restServerApi + "/logins",
                    // "http://localhost:8000/" + "logins",
                    {
                        email,
                        password,
                    },
                    { withCredentials: true }
                )
                const token = res.data.token
                if (token) {
                    navigate("/")
                }
                console.log(res.data.token, res)
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const res = await axios.post(
                    restServerApi + "/signup",
                    // "http://localhost:8000/" + "logins",
                    {
                        email,
                        password,
                    },
                    {
                        withCredentials: true,
                    }
                )
                const token = res.data.token
                if (token) {
                    navigate("/")
                }
            } catch (error) {
                console.log(error)
            }
            // signup
            console.log("Signing up with", { email, password })
        }
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">
                    {isLogin ? "Login" : "Sign Up"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 mt-1 text-black rounded-md"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-2 mt-1 text-black rounded-md"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded-md text-white"
                    >
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                </form>

                <div className="text-center">
                    {isLogin ? (
                        <p>
                            Don&apos; t have an account?{" "}
                            <button
                                onClick={() => setIsLogin(false)}
                                className="text-blue-500 hover:underline"
                            >
                                Sign Up
                            </button>
                        </p>
                    ) : (
                        <p>
                            Already have an account?{" "}
                            <button
                                onClick={() => setIsLogin(true)}
                                className="text-blue-500 hover:underline"
                            >
                                Login
                            </button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AuthForm
