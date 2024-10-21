/* eslint-disable no-unused-vars */
import { useState } from "react"
import FormField from "./shared/FormFeild"
import ListsBtn from "./shared/ListsBtn"
import {
    sendEmailInfoFields,
    toastifyError,
    toastifySuccess,
} from "../constant/exportsArr"
import { toast } from "react-toastify"
import axios from "axios"
import { restServerApi } from "../constant/api"
const initialInputValue = {
    subject: "",
    name: "",
    body: "",
}
const EmailInfo = () => {
    // const [seeLists, setSeeLists] = useState(false)
    const [loading, setLoading] = useState(false)
    const [inputValue, setInputValue] = useState(initialInputValue)
    console.log(inputValue)
    const submitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await axios.post(
                restServerApi + "/mail/creates",
                inputValue,
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
                    inputFields: sendEmailInfoFields,
                    loading,
                    btnText: "Create send Email info",
                }}
            />
        </div>
    )
}

export default EmailInfo
