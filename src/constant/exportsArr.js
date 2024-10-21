import Camping from "../components/Camping"
import EmailInfo from "../components/EmailInfo"
import EmailLists from "../components/EmailLists"
import SmtpForm from "../components/SmtpForm"

export const homeSidebarList = [
    {
        name: "smtp",
    },

    {
        name: "email list",
    },
    {
        name: "email info",
    },
    {
        name: "camping",
    },
]

export const mailOptionsComponentsLists = {
    smtp: SmtpForm,
    camping: Camping,
    "email info": EmailInfo,
    "email list": EmailLists,
}
