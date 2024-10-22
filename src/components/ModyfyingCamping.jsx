/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { toastifyError } from "../constant/exportsArr"
import axios from "axios"
import { restServerApi } from "../constant/api"
import Camp from "./Camp"

/* eslint-disable react/prop-types */
const ModifyingCamping = ({ setModifyCampings, inputValue }) => {
    const [loading, setLoading] = useState(false)
    const [campings, setCampings] = useState([])
    const campingsData = async () => {
        setLoading(true)
        try {
            const res = await axios.get(restServerApi + "/mails/campings", {
                withCredentials: true,
            })
            if (res.data.success !== true) {
                throw new Error("Network response was not ok")
            }

            setCampings(res.data.data)
            setLoading(false)
        } catch (error) {
            console.error("Error:", error)
            toast.error(error.message, toastifyError)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        campingsData()
    }, [setModifyCampings])
    console.log(campings)
    return (
        <>
            <div className="w-full h-[calc(100vh - 60px)]">
                <div className="w-full flex justify-center mt-5">
                    <button
                        className=" p-2 rounded bg-green-500 hover:bg-green-300"
                        onClick={() => setModifyCampings(false)}
                    >
                        Create a new camping
                    </button>
                </div>
                <div className="flex flex-col">
                    {campings.map((camp) => (
                        <Camp
                            key={camp._id}
                            camp={camp}
                            inputValue={inputValue}
                            campingsData={campingsData}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ModifyingCamping
