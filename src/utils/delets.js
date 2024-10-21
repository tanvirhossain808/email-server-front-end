import axios from "axios"
import { toast } from "react-toastify"
import { toastifyError, toastifySuccess } from "../constant/exportsArr"
import { restServerApi } from "../constant/api"

const deleteHandler = async (route, getSmtpLists, setIsloading) => {
    try {
        setIsloading(true)
        const res = await axios.delete(restServerApi + route, {
            withCredentials: true,
        })
        if (res.data.success !== true) {
            throw new Error("Something went wrong when deleting")
        }
        await getSmtpLists()
        setIsloading(false)
        toast.success("Deleted smtp successfully!", toastifySuccess)
    } catch (error) {
        toast.error(
            "Error deleting the item :" + " " + error.message,
            toastifyError
        )
        setIsloading(false)

        return false
    }
    axios.delete()
}

export default deleteHandler
