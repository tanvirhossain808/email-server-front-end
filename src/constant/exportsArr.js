import { Bounce } from "react-toastify"
import Camping from "../components/Camping"
import EmailInfo from "../components/EmailInfo"
import EmailLists from "../components/EmailLists"
import SmtpForm from "../components/SmtpForm"

export const homeSidebarList = [
    {
        name: "create smtp",
    },

    {
        name: "create email list",
    },
    {
        name: "send email info",
    },
    {
        name: "create camping",
    },
]

export const mailOptionsComponentsLists = {
    ["create smtp"]: SmtpForm,
    ["create camping"]: Camping,
    ["send email info"]: EmailInfo,
    ["create email list"]: EmailLists,
}

export const smtpInputFields = [
    { name: "host", type: "string" },
    { name: "port", type: "number" },
    { name: "password", type: "password" },
    { name: "name", type: "string" },
    { name: "user", type: "string" },
]
export const emailInputFields = [
    { name: "name", type: "string" },
    { name: "email", type: "string" },
]
export const sendEmailInfoFields = [
    { name: "subject", type: "string" },
    { name: "name", type: "string" },
    { name: "body", type: "textarea" },
]
export const campingFields = [
    // { name: "emailListId", type: "string" },
    // {
    //     name: "sendEmailId",
    //     type: "string",
    // },
    {
        name: "name",
        type: "string",
    },
]

export const toastifyError = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
}

export const toastifySuccess = {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
}

export const initialSmtpInputFields = {
    host: "",
    port: "",
    password: "",
    name: "",
    user: "",
}
export const smtpUpdaingInitialInputFields = {
    host: "",
    port: "",
    password: "",
    name: "",
    user: "",
}
