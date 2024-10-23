// const Camping = () => {
//     return <div>This is for camping</div>
// }

// export default Camping

/* eslint-disable no-unused-vars */
import { useState } from "react"
import FormField from "./shared/FormFeild"
import ListsBtn from "./shared/ListsBtn"

import {
    campingFields,
    sendEmailInfoFields,
    toastifyError,
    toastifySuccess,
} from "../constant/exportsArr"
import { toast } from "react-toastify"
import axios from "axios"
import { restServerApi } from "../constant/api"
import UpdateModal from "./shared/UpdateModal"
import SelectionModal from "./shared/SelectionModal"
import ModifyingCamping from "./ModyfyingCamping"

const initialInputValue = {
    emailListId: "",
    sendEmailId: "",
    name: "",
    smtpId: "",
}
const Camping = () => {
    const [modifyCampings, setModifyCampings] = useState(false)
    // const [seeLists, setSeeLists] = useState(false)
    const [loading, setLoading] = useState(false)
    const [inputValue, setInputValue] = useState(initialInputValue)
    const [selector, setSelector] = useState("")
    console.log(inputValue)
    const [smtpId, setShowSelector] = useState(0)
    const submitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (
                !inputValue.emailListId ||
                !inputValue.sendEmailId ||
                !inputValue.name
            ) {
                console.log("All fields are required")
                throw new Error("Please fill in all required fields")
            }
            const res = await axios.post(
                restServerApi + "/mails/set/camping",
                {
                    emailListId: inputValue.emailListId,
                    sendEmailId: inputValue.sendEmailId,
                    name: inputValue.name,
                    smtpId: inputValue.smtpId,
                },
                {
                    withCredentials: true,
                }
            )
            if (res.data.success !== true) {
                throw new Error("something went wrong")
            }
            toast.success("successfully create a new capming", toastifySuccess)
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
        <>
            {modifyCampings ? (
                <ModifyingCamping
                    setModifyCampings={setModifyCampings}
                    inputValue={inputValue}
                />
            ) : (
                <div className="w-full">
                    {selector === "emailList" && (
                        <SelectionModal
                            {...{
                                selector,
                                setSelector,
                                route: "/emaillists",
                                setInputValue,
                            }}
                            key={1}
                        />
                    )}
                    {selector === "emailSendInfo" && (
                        <SelectionModal
                            {...{
                                selector,
                                setSelector,
                                route: "/mail/emailbodylist",
                                setInputValue,
                            }}
                            key={2}
                        />
                    )}
                    {selector === "smtp" && (
                        <SelectionModal
                            {...{
                                selector,
                                setSelector,
                                route: "/smtp/lists",
                                setInputValue,
                            }}
                            key={2}
                        />
                    )}
                    <div className="flex items-center justify-center mt-5">
                        <button
                            className="p-2 rounded bg-green-500 hover:bg-green-300"
                            onClick={() => setModifyCampings(true)}
                        >
                            Modify camping
                        </button>
                    </div>

                    <div className="flex flex-col justify-center items-center mt-20">
                        <button
                            className="bg-green-400 text-black p-2 mt-4 rounded"
                            onClickCapture={() => setSelector("emailList")}
                        >
                            Select particular email list:
                        </button>
                        <button
                            className="bg-green-400 text-black p-2 mt-4 rounded"
                            onClickCapture={() => setSelector("emailSendInfo")}
                        >
                            Select particular email send info
                        </button>
                        <button
                            className="bg-green-400 text-black p-2 mt-4 rounded"
                            onClickCapture={() => setSelector("smtp")}
                        >
                            Select smtp server
                        </button>
                    </div>

                    <FormField
                        {...{
                            submitHandler,
                            inputValue,
                            setInputValue,
                            inputFields: campingFields,
                            loading,
                            btnText: "a camping",
                        }}
                    />
                </div>
            )}
        </>
    )
}

export default Camping
