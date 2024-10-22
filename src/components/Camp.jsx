/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react"
import SwitchingAnimation from "./shared/SwitchingAnimation"
import axios from "axios"
import { restServerApi } from "../constant/api"
import { toast } from "react-toastify"
import { toastifyError, toastifySuccess } from "../constant/exportsArr"
import LoadingState from "./shared/LoadingState"

/* eslint-disable react/prop-types */
const Camp = ({ camp, campingsData }) => {
    const { name, campingStatus, _id, inputValue } = camp
    const [deleting, setDeleting] = useState(false)
    console.log(_id, "kd")
    const handleDelete = async () => {
        setDeleting(true)
        try {
            const res = await axios.delete(
                restServerApi + `/mails/delete/camping/${_id}`,
                {
                    withCredentials: true,
                }
            )
            if (res.data.success !== true) {
                throw new Error(
                    "Something went wrong deleted operation not completed"
                )
            }
            await campingsData()
            setDeleting(false)
            toast.success("Deleted camping successfully!", toastifySuccess)
        } catch (error) {
            setDeleting(false)
            console.log(error)
            toast.error(error.message, toastifyError)
        } finally {
            setDeleting(false)
        }
    }
    console.log(inputValue, "inputvalue")

    return (
        <>
            <div className="mt-5 flex flex-col">
                <div className="flex flex-col items-center gap-2 justify-center">
                    <p>name:{name}</p>
                    <div className="flex items-center gap-2">
                        <SwitchingAnimation
                            {...{ campingStatus, _id, inputValue }}
                        />
                        <div>
                            <button
                                onClick={handleDelete}
                                className={`p-2 rounded hover:bg-green-300 ${
                                    deleting ? "bg-green-300" : "bg-green-500"
                                }`}
                            >
                                {deleting ? <LoadingState /> : "Delete camping"}
                            </button>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Camp
