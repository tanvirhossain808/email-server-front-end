/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios"
import { useEffect, useState } from "react"
import { restServerApi } from "../../constant/api"
import { toast } from "react-toastify"
import { toastifyError, toastifySuccess } from "../../constant/exportsArr"
import LoadingState from "./LoadingState"

const SelectLists = ({ route, setInputValue }) => {
    const [options, setOptions] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const handleData = async () => {
            try {
                const res = await axios.get(restServerApi + route, {
                    withCredentials: true,
                })
                if (res.data.success !== true) {
                    throw new Error("Something went wrong")
                }
                setOptions(res.data.data)
                setLoading
            } catch (error) {
                console.error(error)
                toast.error(error.message, toastifyError)
                setLoading(false)
            }
        }
        handleData()
    }, [route])
    let bodyList = false
    if (route === "/mail/emailbodylist") {
        bodyList = true
    }
    return (
        <div>
            <div className="">bg</div>
            {options.length > 0 ? (
                <select
                    name=""
                    id=""
                    onChange={(e) => {
                        if (route === "/mail/emailbodylist") {
                            toast.success(
                                "email list added successfully",
                                toastifySuccess
                            )
                            return setInputValue((pre) => {
                                return { ...pre, sendEmailId: e.target.value }
                            })
                        } else if (route === "/emaillists") {
                            return setInputValue((pre) => {
                                toast.success(
                                    "email list added successfully",
                                    toastifySuccess
                                )
                                return {
                                    ...pre,
                                    emailListId: e.target.value,
                                }
                            })
                        } else {
                            return setInputValue((pre) => {
                                toast.success(
                                    "email list added successfully",
                                    toastifySuccess
                                )
                                return {
                                    ...pre,
                                    smtpId: e.target.value,
                                }
                            })
                        }
                    }}
                >
                    <option value="Select one">Select one</option>
                    {options.map((option, i) => {
                        return (
                            <option
                                value={option._id}
                                className="text-black"
                                key={i}
                            >
                                {option.name}
                            </option>
                        )
                    })}
                </select>
            ) : (
                <LoadingState />
            )}
        </div>
    )
}

export default SelectLists
