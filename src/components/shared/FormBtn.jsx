/* eslint-disable react/prop-types */
import LoadingState from "./loadingState"

const FormBtn = ({ loading, btnText }) => {
    return (
        <button
            className={` hover:bg-[#ffffffa8] flex gap-2 h-14 items-center justify-center rounded p-2 text-black ${
                loading ? "bg-[#ffffffa8]" : "bg-white"
            }`}
        >
            {!loading ? "Crate" + " " + btnText : "Creating" + " " + btnText}
            {loading && <LoadingState />}
        </button>
    )
}

export default FormBtn
