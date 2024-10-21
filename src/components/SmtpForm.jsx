const SmtpForm = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
            <p>
                Forgot password? <a href="#">Reset password</a>
            </p>
            <p>
                Don't have an account? <a href="#">Sign up</a>
            </p>
        </div>
    )
}

export default SmtpForm
