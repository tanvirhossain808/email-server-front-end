import { useState } from "react"
import Sidebar from "../components/Sidebar"
import { mailOptionsComponentsLists } from "../constant/exportsArr"

const Home = () => {
    const [activeSidebar, setActiveSidebar] = useState("smtp")
    const SelectedComponents = mailOptionsComponentsLists[activeSidebar]
    return (
        <div className="flex">
            <Sidebar {...{ activeSidebar, setActiveSidebar }} />
            <div className="w-full">otherpart</div>
            <SelectedComponents />
        </div>
    )
}

export default Home
