/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "react"
import ListsBtn from "./shared/ListsBtn"
import { useEffect, useState } from "react"
import axios from "axios"
import { restServerApi } from "../constant/api"
import { toast } from "react-toastify"
import { toastifyError } from "../constant/exportsArr"
import deleteHandler from "../utils/delets"
import LoadingState from "./shared/k/LoadingState"
import UpdateModal from "./shared/UpdateModal"

const SmtpLists = ({ seeLists, setSeeLists }) => {
    const [loading, setLoading] = useState(false)
    const [smtpLists, setSmtpLists] = useState([])
    const [updatingId, setUpdatingId] = useState("")

    const getSmtpLists = async () => {
        setLoading(true)
        try {
            setLoading(true)
            const res = await axios.get(restServerApi + "/smtp/lists", {
                withCredentials: true,
            })
            if (res?.data.success !== true) {
                throw new Error("Something went wrong")
            }
            setSmtpLists(res.data.data)
            setLoading(false)
        } catch (error) {
            toast.error(error.message, toastifyError)
            setLoading(false)
        }
    }
    useEffect(() => {
        if (!seeLists) return

        getSmtpLists()
    }, [seeLists])
    return (
        <>
            {updatingId && (
                <UpdateModal
                    setUpdatingId={setUpdatingId}
                    updatingId={updatingId}
                    smtpLists={smtpLists}
                    getSmtpLists={getSmtpLists}
                />
            )}
            <div className="w-full h-[calc(100vh - 60px)]">
                <ListsBtn setSeeLists={setSeeLists} text={"Create smtp"} />
                <div className="flex flex-col gap-4">
                    {smtpLists.length > 0 ? (
                        <div>
                            <table className="text-center mt-20 w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th>Smtp name</th>
                                        <th>Smtp host</th>
                                        <th>Smtp port</th>
                                        <th>Smtp user</th>
                                        <th>Update smtp</th>
                                        <th>Delete smtp</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {smtpLists.map((smtp) => (
                                        <SmtpList
                                            key={smtp._id}
                                            smtp={smtp}
                                            getSmtpLists={getSmtpLists}
                                            isUpdating={updatingId}
                                            setUpdatingId={setUpdatingId}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center mt-10">
                            <h2 className="text-2xl">
                                No smtp data found please create a new one
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default SmtpLists

const SmtpList = ({ smtp, getSmtpLists, updatingId, setUpdatingId }) => {
    const { host, port, user, name, _id } = smtp
    const [loading, setIsloading] = useState(false)

    useEffect(() => {
        if (updatingId) {
            document.body.style.overflow = "hidden" // Disable scroll
        } else {
            document.body.style.overflow = "auto" // Enable scroll
        }
        return () => {
            document.body.style.overflow = "auto" // Cleanup when modal is closed
        }
    }, [updatingId])
    return (
        <>
            {/* {isUpdating && <UpdateModal setIsUpdating={setIsUpdating} />} */}
            <tr className="mt-10">
                <td className="pt-4">{name}</td>
                <td className="pt-4">{host}</td>
                <td className="pt-4">{port}</td>
                <td className="pt-4">{user}</td>
                <td className="pt-4">
                    <button
                        onClick={() => {
                            setUpdatingId(_id)
                        }}
                        className="bg-green-500 hover:bg-green-400 w-20 h-10 rounded"
                    >
                        Update
                    </button>
                </td>
                <td
                    className="pt-4"
                    onClick={() =>
                        deleteHandler(
                            `/smtp/delete/${_id}`,
                            getSmtpLists,
                            setIsloading
                        )
                    }
                >
                    <button className="bg-red-500 hover:bg-red-300 w-20 h-10 rounded">
                        {loading ? <LoadingState /> : "Delete"}{" "}
                    </button>
                </td>
            </tr>
        </>
    )
}
