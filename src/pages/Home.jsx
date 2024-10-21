import { useState } from "react"
import Sidebar from "../components/Sidebar"
import { mailOptionsComponentsLists } from "../constant/exportsArr"

const Home = () => {
    const [activeSidebar, setActiveSidebar] = useState("create smtp")
    const SelectedComponents = mailOptionsComponentsLists[activeSidebar]
    return (
        <div className="flex">
            <Sidebar {...{ activeSidebar, setActiveSidebar }} />
            <SelectedComponents />
        </div>
    )
}

export default Home
