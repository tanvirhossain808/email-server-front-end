import axios from "axios"
import { useState } from "react"
import { restServerApi } from "../../constant/api"
const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true) // Toggle between Login and Signup
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isLogin) {
            // console.log("Logging in with", { email, password })
            // try {
            //     const res = await axios.get(
            //         // "http://localhost:8000/uganda",
            //         "https://smtp-server-rho.vercel.app/uganda",
            //         // {
            //         //     email,
            //         //     password,
            //         // },
            //         { withCredentials: true }
            //     )
            //     // const resule = await res.JSON()
            //     console.log(res)
            //     console.log(res?.data?.token)
            //     // document.cookie = `token=${res.data.token}`
            // }

            try {
                const res = await axios.get(
                    "https://smtp-server-rho.vercel.app/uganda",
                    // "http://localhost:8000/uganda",

                    // {
                    //     email: email, // Add your email here
                    //     password: password, // Add your password here
                    // },
                    {
                        withCredentials: true,
                    }
                )
                // try {
                //     const res = await axios.post(
                //         // "https://smtp-server-rho.vercel.app/login",
                //         "http://localhost:8000/login",

                //         {
                //             email: email, // Add your email here
                //             password: password, // Add your password here
                //         },
                //         {
                //             withCredentials: true,
                //         }
                //     )
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log("Signing up with", { email, password })
            // Add signup logic here
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
