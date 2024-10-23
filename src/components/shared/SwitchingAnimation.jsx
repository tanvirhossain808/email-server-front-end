/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios"
import { useState } from "react"
import { restServerApi } from "../../constant/api"
import { toast } from "react-toastify"
import { toastifyError, toastifySuccess } from "../../constant/exportsArr"
import LoadingState from "./LoadingState"
const SwitchingAnimation = ({ campingStatus, _id, inputValue }) => {
    const [isOn, setIsOn] = useState(campingStatus)
    const [loading, setLoading] = useState(false)
    const toggleButton = async () => {
        console.log(inputValue)
        try {
            setLoading(true)
            let res
            if (!isOn) {
                res = await axios.post(
                    restServerApi + `/mails/startcamping/true/${_id}`,
                    {},
                    {
                        withCredentials: true,
                    }
                )
            } else {
                res = await axios.post(
                    restServerApi + `/mails/offcamping/false/${_id}`,
                    {},
                    {
                        withCredentials: true,
                    }
                )
            }
            if (res.data.success !== true) {
                throw new Error("something went wrong")
            }
            toast.success(res.data.message, toastifySuccess)
            setLoading(false)
            setIsOn(!isOn)
        } catch (error) {
            console.log(error)
            toast.error(error.message, toastifyError)
            setLoading(false)
        }
    }

    return (
        <div className=" items-center justify-center">
            <button
                onClick={toggleButton}
                className={`relative w-20 h-10 flex items-center justify-center rounded-full p-1 transition-colors duration-300 ease-in-out ${
                    isOn ? "bg-green-500" : "bg-gray-300"
                }`}
            >
                {!loading ? (
                    <span
                        className={`absolute left-1 bg-white w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                            isOn ? "translate-x-10" : "translate-x-0"
                        }`}
                    ></span>
                ) : (
                    <LoadingState />
                )}
            </button>
        </div>
    )
}

export default SwitchingAnimation
