/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
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
import FormBtn from "./shared/FormBtn"
import ListEmail from "./ListEmail"
const initialInputValue = {
    name: "",
    email: "",
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
    const fetchEmailLists = async () => {
        try {
            const res = await axios.get(restServerApi + "/emaillists", {
                withCredentials: true,
            })
            console.log(res.data)
            setSeeLists(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchEmailLists()
    }, [])
    console.log(seeLists)
    return (
        <div className="w-full flex mt-10">
            <form
                className="flex basis-[50%] flex-col gap-2 items-center"
                onSubmit={submitHandler}
            >
                <input
                    type="text"
                    name="name"
                    className="bg-black border-[1px] rounded border-white outline-none w-1/2"
                    placeholder="Enter email list name"
                    onChange={(e) =>
                        setInputValue({ ...inputValue, name: e.target.value })
                    }
                    value={inputValue.name}
                />
                <textarea
                    name="email"
                    id=""
                    placeholder="Please enter coma speared email lists"
                    className="bg-black outline-none border-[1px] w-1/2 rounded border-white"
                    rows={6}
                    value={inputValue.email}
                    onChange={(e) =>
                        setInputValue({ ...inputValue, email: e.target.value })
                    }
                ></textarea>
                <div className="flex items-center">
                    <FormBtn loading={loading} btnText={"Create email lists"} />
                </div>
            </form>
            <div>
                <h2>Email lists</h2>
                {seeLists.length > 0 ? (
                    seeLists.map((list, index) => (
                        <ListEmail key={list._id} {...list} />
                    ))
                ) : (
                    <div>No email lists found</div>
                )}
            </div>
        </div>
    )
}

export default EmailLists
