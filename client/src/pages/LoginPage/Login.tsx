import './Login.css'
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect } = useAuth0()

    return (
        <main className="login-page">
            <div className='l-messaje-container'>
                <div className='l-message'>
                    <p>You must be logged in to access your movies or series. Please </p><button onClick={() => loginWithRedirect()}>Log in</button>
                    <span> or if you are not a member </span>
                    <button> Register</button>
                </div>
            </div>
        </main>
    )
}

export default Login
