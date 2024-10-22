/* eslint-disable no-unused-vars */

import { useEffect } from "react"
import SelectLists from "./SelectLists"

/* eslint-disable react/prop-types */

const SelectionModal = ({ setSelector, selector, route, setInputValue }) => {
    useEffect(() => {
        if (selector) {
            document.body.style.overflow = "hidden" // Disable scroll
        } else {
            document.body.style.overflow = "auto" // Enable scroll
        }
        return () => {
            document.body.style.overflow = "auto" // Cleanup when modal is closed
        }
    }, [selector])
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={() => setSelector(false)} // Close modal on background click
            ></div>
            <div className="bg-white p-6 rounded-lg shadow-lg z-10">
                <h2 className="text-xl font-bold mb-4 text-black">
                    Select camping details
                    <SelectLists route={route} setInputValue={setInputValue} />
                </h2>
            </div>
        </div>
    )
}

export default SelectionModal
