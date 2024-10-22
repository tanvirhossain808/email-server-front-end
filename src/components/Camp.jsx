/* eslint-disable no-unused-vars */

import { useEffect } from "react"
import SwitchingAnimation from "./shared/SwitchingAnimation"

/* eslint-disable react/prop-types */
const Camp = ({ camp }) => {
    const { name, campingStatus, _id, inputValue } = camp
    console.log(inputValue, "inputvalue")
    return (
        <>
            <div className="mt-5 flex flex-col">
                <div className="flex flex-col items-center gap-2 justify-center">
                    <p>{name}</p>
                    <SwitchingAnimation
                        {...{ campingStatus, _id, inputValue }}
                    />
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Camp
