/* eslint-disable no-unused-vars */

import inputHandler from "../../utils/inputHandler"
import FormBtn from "./FormBtn"
import LoadingState from "./loadingState"
/* eslint-disable react/prop-types */
const FormField = ({
    submitHandler,
    inputFields,
    setInputValue,
    inputValue,
    loading,
}) => {
    return (
        <div className="text-white h-full flex items-center justify-center">
            <form
                onSubmit={submitHandler}
                className=" w-1/4 flex flex-col gap-2 ]"
            >
                {inputFields?.map(
                    ({ id, label, type, placeholder, className, name }) => (
                        <div key={id}>
                            <label
                                htmlFor={id}
                                className="block text-sm font-medium"
                            >
                                {label}
                            </label>
                            <input
                                required
                                name={name}
                                id={id}
                                type={type}
                                value={inputValue[name]}
                                placeholder={name}
                                onChange={(e) =>
                                    inputHandler(
                                        e,
                                        setInputValue,
                                        inputValue,
                                        name
                                    )
                                }
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none bg-black focus:ring-white"
                            />
                        </div>
                    )
                )}
                <div className="flex items-center justify-center">
                    <FormBtn loading={loading} />
                </div>
            </form>
        </div>
    )
}

export default FormField
