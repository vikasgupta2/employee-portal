// import {Component} from "react"
import { useNavigate} from "react-router-dom"
import "./index.css"


const Login =()=> {
    const navigate = useNavigate()
    const changeToSignup = ()=>navigate("/signup");
    const validateUser = ()=>navigate("/home")
        return(
            <div className="main-container">
                <div className='left-container'>
                    <img className='login-password' src="https://i.ibb.co/0GBNG4B/login-img.png" alt="login-password"/>
                </div>
                <div className='right-container'>
                    <div className="login-container">
                        <h1 className='heading'>Hello! Welcome back.</h1>
                        <p className='paragraph'>Log in with your data that you entered during registration.</p>
                        <div className='input-container'>
                        <label className='email-label' htmlFor='username'>Email address</label>
                        <br/>
                        <input className='email-input' pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" required type="email" id='username' placeholder="Email address"/>
                        </div>
                        <div className='input-container'>
                        <label className='password-label' htmlFor='password'>Password</label>
                        <br/>
                        <input className='password-input' type="password" id='password' placeholder="Password"/>
                        </div>
                        <button className='btn' type='button' onClick={validateUser}>Log In</button>
                        <button className="btn create-new-account-btn" onClick={changeToSignup}>Create new account</button>
                    </div>
                </div>
            </div>
        )
    

}
export default Login