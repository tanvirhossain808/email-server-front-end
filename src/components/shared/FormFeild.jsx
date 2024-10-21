/* eslint-disable no-unused-vars */

import inputHandler from "../../utils/inputHandler"

/* eslint-disable react/prop-types */
const FormField = (
    { submitHandler = () => {} },
    inputFields,
    setInputValue,
    inputValue
) => {
    return (
        <div className="text-white">
            <form onSubmit={submitHandler}>
                {inputFields.map(
                    ({ id, label, type, placeholder, className, name }) => (
                        <div key={id}>
                            <label
                                htmlFor={id}
                                className="block text-sm font-medium"
                            >
                                {label}
                            </label>
                            <input
                                name={name}
                                id={id}
                                type={type}
                                value={inputValue[name]}
                                placeholder={placeholder}
                                onChange={(e) =>
                                    inputHandler(
                                        e,
                                        setInputValue,
                                        inputValue,
                                        name
                                    )
                                }
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-white"
                            />
                        </div>
                    )
                )}
            </form>
        </div>
    )
}

export default FormField
