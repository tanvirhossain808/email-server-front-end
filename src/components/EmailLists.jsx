/* eslint-disable no-unused-vars */
import { useState } from "react"
import FormField from "./shared/FormFeild"
import ListsBtn from "./shared/ListsBtn"
import {
    emailInputFields,
    toastifyError,
    toastifySuccess,
} from "../constant/exportsArr"
import { toast } from "react-toastify"
import axios from "axios"
import { restServerApi } from "../constant/api"
const initialInputValue = {
    name: "",
    email: [],
}
const EmailLists = () => {
    const [seeLists, setSeeLists] = useState(false)
    const [loading, setLoading] = useState(false)
    const [inputValue, setInputValue] = useState(initialInputValue)
    const submitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        const email = inputValue.email.split(",").map((email) => email.trim())
        console.log(email, inputValue.name)
        try {
            const res = await axios.post(
                restServerApi + "/emaillists/create",
                {
                    emails: email,
                    name: inputValue.name,
                },
                {
                    withCredentials: true,
                }
            )
            if (res.data.success !== true) {
                throw new Error("something went wrong")
            }
            toast.success(
                "successfully create a new email list",
                toastifySuccess
            )
            setInputValue(initialInputValue)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error(error.message, toastifyError)
            return
        }
    }
    return (
        <div className="w-full h-[calc(100vh - 60px)]">
            {/* <ListsBtn setSeeLists={setSeeLists} text={"See Email lists"} /> */}
            <FormField
                {...{
                    submitHandler,
                    inputValue,
                    setInputValue,
                    inputFields: emailInputFields,
                    loading,
                    btnText: "email lists",
                }}
            />
        </div>
    )
}

export default EmailLists
