import { useState } from "react"
import LoadingState from "./shared/LoadingState"
import { toast } from "react-toastify"
import { toastifyError } from "../constant/exportsArr"
import axios from "axios"
import { restServerApi } from "../constant/api"

const ReplyEmail = () => {
    const [replies, setReplies] = useState([])
    const [loading, setLoading] = useState(false)
    const [inputValue, setInputValue] = useState("")
    console.log(replies)
    const handleReplies = async (e) => {
        e.preventDefault()
        if (!inputValue) {
            throw new Error("Please enter receiver email address")
        }
        try {
            setLoading(true)
            const res = await axios.get(
                restServerApi + "/user/emailreplies/" + inputValue,
                { withCredentials: true }
            )
            if (res.data.success !== true) {
                throw new Error("Network response was not ok")
            }
            setReplies(res.data.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error(error.message, toastifyError)
        }
    }
    return (
        <div className="w-full flex justify-center flex-col items-center">
            <form
                onSubmit={handleReplies}
                className="flex flex-col mt-5 ml-5 justify-center"
            >
                <input
                    type="email"
                    placeholder="Please type receiver email address"
                    className="bg-black border-white border-[1px]"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                />
                <div className="mt-4">
                    <button
                        className="bg-green-500 hover:bg-green-300 flex items-center gap-1 w-28 justify-center rounded"
                        type="submit"
                    >
                        Search
                        {loading && <LoadingState />}
                    </button>
                </div>
            </form>
            <div className="flex flex-col justify-center items-center mt-20">
                <ul>
                    {replies.map((reply) => (
                        <li
                            key={reply._id}
                            className=" border-2 border-white list-none mt-3"
                        >
                            Sender: {reply.sender}
                            <br />
                            Message: {reply.body}
                            <br />
                            Subject: {reply.subject}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ReplyEmail
