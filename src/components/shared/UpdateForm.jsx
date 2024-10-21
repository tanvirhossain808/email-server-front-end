/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import LoadingState from "./loadingState"
import { toast } from "react-toastify"
import { toastifyError } from "../../constant/exportsArr"
import axios from "axios"
import { restServerApi } from "../../constant/api"

const UpdateForm = ({ initialInput, setUpdatingId, getUpdateSmtpLists }) => {
    const [inputValue, setInputValue] = useState(initialInput)
    const totalInputFields = Object.keys(inputValue)
    const [loading, setLoading] = useState(false)
    const handleUpdate = async (e) => {
        if (loading) return
        e.preventDefault()
        setLoading(true)
        const { host, user, password, name, port, _id } = inputValue
        try {
            const res = await axios.patch(
                restServerApi + `/smtp/update/${_id}`,
                {
                    host,
                    user,
                    password,
                    name,
                    port,
                },
                {
                    withCredentials: true,
                }
            )
            if (res.data.success !== true) {
                throw new Error("some went wrong pease try again")
            }
            await getUpdateSmtpLists()
            toast.success("smtp updated successfully")
            setLoading(false)
            setUpdatingId("")
        } catch (error) {
            toast.error(error.message, toastifyError)
            setLoading(false)
        }
    }
    return (
        <div>
            <form
                className="flex flex-col gap-2 w-[25vw]"
                onSubmit={handleUpdate}
            >
                {totalInputFields.map((fieldName) => {
                    if (
                        !["name", "port", "host", "user", "password"].includes(
                            fieldName
                        )
                    )
                        return null
                    return (
                        <input
                            className="bg-[#000000a1]"
                            key={fieldName}
                            placeholder={fieldName}
                            type="text"
                            name={fieldName}
                            value={inputValue[fieldName]}
                            onChange={(e) =>
                                setInputValue({
                                    ...inputValue,
                                    [fieldName]: e.target.value,
                                })
                            }
                        />
                    )
                })}
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-green-500 flex items-center justify-center gap-1 max-w-[200px] h-10 rounded w-full hover:bg-green-400 text-black"
                    >
                        {loading ? "loading" : "Update"}
                        {loading && <LoadingState />}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateForm
