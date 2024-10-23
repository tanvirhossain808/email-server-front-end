import { useState } from "react"
import Sidebar from "../components/Sidebar"
import { mailOptionsComponentsLists } from "../constant/exportsArr"

const Home = () => {
    const [activeSidebar, setActiveSidebar] = useState("create smtp")
    const SelectedComponents = mailOptionsComponentsLists[activeSidebar]
    return (
        <div className="flex w-full max-h-[calc(100vh-60px)]">
            <Sidebar {...{ activeSidebar, setActiveSidebar }} />
            <div className="w-full overflow-y-auto">
                <div className="h-[300vh]">
                    <SelectedComponents />
                </div>
            </div>
        </div>
    )
}

export default Home
