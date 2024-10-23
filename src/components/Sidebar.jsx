/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react"
import { homeSidebarList } from "../constant/exportsArr"

/* 

export const homeSidebarList = [
    {
        name: "smtp",
    },

    {
        name: "email list",
    },
    {
        name: "Email info",
    },
    {
        name: "camping",
    },
]


*/
const Sidebar = ({ activeSidebar, setActiveSidebar }) => {
    return (
        <div
            className={`max-w-[400px] flex flex-col justify-evenly h-[calc(100vh-60px)] items-center gap-4 p-2 border-r-2 border-white 400 cursor-pointer`}
        >
            {homeSidebarList.map((sidebar, index) => (
                <p
                    key={index}
                    className={`
                       border-b-2
                       w-full
                       text-nowrap
                        ${
                            activeSidebar === sidebar.name
                                ? "border-white"
                                : "border-transparent"
                        }`}
                    onClick={() => setActiveSidebar(sidebar.name)}
                >
                    {sidebar.name}
                </p>
            ))}
        </div>
    )
}

export default Sidebar
