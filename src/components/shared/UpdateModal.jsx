import { smtpUpdaingInitialInputFields } from "../../constant/exportsArr"
import UpdateForm from "./UpdateForm"
import UpdatingForm from "./UpdatingForm"

/* eslint-disable react/prop-types */
const UpdateModal = ({
    setUpdatingId,
    smtpLists,
    updatingId,
    getSmtpLists,
}) => {
    const [currentSmpt] = smtpLists.filter((smtp) => updatingId === smtp._id)
    for (const inputField in currentSmpt) {
        if (inputField === "password") {
            smtpUpdaingInitialInputFields[inputField] = "********"
        } else
            smtpUpdaingInitialInputFields[inputField] = currentSmpt[inputField]
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={() => setUpdatingId("")} // Close modal on background click
            ></div>

            <div className="bg-white p-6 rounded-lg shadow-lg z-10">
                <h2 className="text-xl font-bold mb-4 text-black">
                    Update SMTP Details
                </h2>
                <UpdateForm
                    initialInput={smtpUpdaingInitialInputFields}
                    setUpdatingId={setUpdatingId}
                    getUpdateSmtpLists={getSmtpLists}
                />
            </div>
        </div>
    )
}

export default UpdateModal
