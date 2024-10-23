/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* 
{
    "_id": "6718f7837b26fa2f8a259606",
    "name": "email-list 1",
    "emails": [
        "tanvirhossan528@gmail.com",
        "tanvirhossen528@gmail.com"
    ],
    "sent": true,
    "camping": false,
    "replies": [],
    "__v": 0
}


*/

import { useState } from "react"

const ListEmail = ({ _id, name, emails, replies, sent }) => {
    const [showLists, setShowLists] = useState(false)
    const [showReplies, setShowReplies] = useState(false)
    const handleShowReplies = () => {
        if (replies.length === 0) {
            alert("No replies yet")
            return
        }
        setShowReplies(!showReplies)
        setShowLists(false)
    }
    const handleShowLists = () => {
        setShowLists(!showLists)
        setShowReplies(false)
    }
    return (
        <div>
            <h2>Email list name : {name}</h2>
            <div className="flex items-center gap-5">
                <div className="flex flex-col items-center justify-center gap-2">
                    <p>Email sent</p>
                    <div
                        className={`w-2 h-2 rounded-full ${
                            sent ? "bg-green-500" : "bg-red-700"
                        }`}
                    ></div>
                    <button
                        className="bg-yellow-500 hover:bg-yellow-300 text-black w-[100px] rounded"
                        onClick={handleShowLists}
                    >
                        {showLists ? "Hide emails" : "Show list"}
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <p>Reply received</p>
                    <div
                        className={`w-2 h-2 rounded-full ${
                            replies.length > 0 ? "bg-green-500" : "bg-red-700"
                        }`}
                    ></div>
                    <button
                        className="bg-yellow-500 hover:bg-yellow-300 text-black w-[100px] rounded"
                        onClick={handleShowReplies}
                    >
                        {showReplies ? "Hide replies" : "Show replies"}
                    </button>
                </div>
            </div>
            <div>
                {showLists &&
                    emails.map((email, index) => (
                        <div key={index}>{email}</div>
                    ))}
                {showReplies &&
                    replies.map((reply, index) => (
                        <div key={index}>
                            <p>from:{reply.from}</p>
                            <p>subject:{reply.subject}</p>
                            <p>message:{reply.message}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ListEmail
