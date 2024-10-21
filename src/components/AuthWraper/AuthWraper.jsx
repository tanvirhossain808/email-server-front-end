/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { restServerApi } from "../../constant/api"

const AuthWrapper = ({ children, isAuthPage, path }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState("true")
    const userAuthenticate = async () => {
        try {
            const res = await axios.get(
                `${restServerApi}/user/isauthenticated`,
                {
                    withCredentials: true,
                }
            )
            const token = res.data.token
            return !!token
        } catch (error) {
            console.log(error.message)
            return false
        }
    }

    useEffect(() => {
        const checkAuthentication = async () => {
            const authenticated = await userAuthenticate()
            setLoading(false)

            if (authenticated) {
                navigate("/")
                return
            } else {
                return navigate("/auth")
            }
        }

        checkAuthentication()
    }, [navigate, isAuthPage, path])

    if (loading) {
        return <div>Loading...</div>
    }

    return <>{children}</>
}

export default AuthWrapper
