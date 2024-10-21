const inputHandler = (e, setInputValue, inputValue, name) => {
    setInputValue({
        ...inputValue,
        [name]: e.target.value,
    })
}

export default inputHandler
