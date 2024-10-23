/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import FormField from "./shared/FormFeild"
import {
    initialSmtpInputFields,
    smtpInputFields,
    toastifyError,
    toastifySuccess,
} from "../constant/exportsArr"
import axios from "axios"
import { restServerApi } from "../constant/api"
import { toast } from "react-toastify"
import ListsBtn from "./shared/ListsBtn"
import SmtpLists from "./SmtpLists"
const SmtpForm = () => {
    const [inputValue, setInputValue] = useState(initialSmtpInputFields)
    const [loading, setLoading] = useState(false)
    const [seeLists, setSeeLists] = useState(false)

    const [error, setError] = useState({
        err: false,
        message: "",
    })
    const submitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        const { host, port, user, password, name } = inputValue

        try {
            if (!host || !port || !user || !password || !name) {
                console.log("All fields are required")
                throw new Error("Please fill in all required fields")
            }
            const res = await axios.post(
                restServerApi + "/smtp/create",
                {
                    host: inputValue.host,
                    port: inputValue.port,
                    password: inputValue.password,
                    name: inputValue.name,
                    user: inputValue.user,
                },
                {
                    withCredentials: true,
                }
            )
            if (res?.data.success === false) {
                setLoading(false)
                throw new Error("Something went wrong")
            }
            setInputValue(initialSmtpInputFields)
            toast.success(
                "SMTP configuration created successfully",
                toastifySuccess
            )
            setLoading(false)
        } catch (error) {
            if (error.response.data.err) {
                toast.error(error.response.data.err, toastifyError)
            }

            setLoading(false)
        }
    }

    if (seeLists) {
        return (
            <>
                <SmtpLists {...{ seeLists, setSeeLists }} />
            </>
        )
    }

    return (
        <>
            <div className="w-full">
                <ListsBtn setSeeLists={setSeeLists} text={"See stmp lists"} />
                <FormField
                    {...{
                        submitHandler,
                        inputValue,
                        setInputValue,
                        inputFields: smtpInputFields,
                        loading,
                    }}
                />
            </div>
        </>
    )
}

export default SmtpForm
