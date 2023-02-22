// import {Component} from "react"
import {useNavigate} from "react-router-dom"
// import Cookies from "js-cookie"
import './index.css'



const SignUp = () => {

    // state = {email:'', password: ''}

    // getEmail = (event)=> {
    //     this.setState({email: event.target.value})
    // }
    // getPassword = (event)=> {
    //     this.setState({password: event.target.value})
    // }

    // doCreateAccount = () => {
    //     const {email, password} = this.state
    //     const mail = Cookies.get(email)
    //     if (mail===undefined){
    //         Cookies.set(email, password, {expires: 30})
    //         document.getElementById('hide').textContent="Please Enter Correct Email"
    //     }else{
    //         document.getElementById('hide').textContent="Email Already Exists"
    //     }
        
    // }
    const navigate = useNavigate()
    const ChangeToLogin=() => {
        navigate("/login")
    }
    const thankYouPage = () => {
        navigate('/thank-you')
    }

    return(
            <div className="main-container">
                <div className='left-container'>
                    <img className='login-password' src="https://i.ibb.co/0GBNG4B/login-img.png" alt="login-password"/>
                </div>
                <div className='right-container'>
                    <div className="login-container">
                        <h1 className='heading'>Create Your Account</h1>
                        <p id="hide"></p>
                        <div className='input-container'>
                        <label htmlFor='name' className='input-ele'>Name </label>
                        <input type="text" id='name' className='input-ele-box' placeholder='Full Name'/>
                        </div>
                        <div className='input-container'>
                        <label htmlFor='dob' className='input-ele'>Date of Birth </label>
                        <input type='date' className='input-ele-box' id='dob'/>
                        </div>
                        <div>
                        <p className='gender-para'>Gender </p>
                        <input type="checkbox" name="gender" value="male" /> 
                        <label htmlFor='male' className='gender-label'>Male</label>
                        <input type="checkbox" name="gender" value="female"/> 
                        <label htmlFor='female' className='gender-label'>Female</label>
                        <input type="checkbox" name="gender" value="other"/> 
                        <label htmlFor='other' className='gender-label'>Other</label>
                        </div>
                        <div className='input-container'>
                        <label className='input-ele' htmlFor='company'>Company Name </label>
                        <input className='input-ele-box' type="text" id='company' placeholder="Company Name"/>
                        </div>
                        <div className='input-container'>
                        <label className='input-ele' htmlFor='username'>Email address </label>
                        <input className='input-ele-box' type="email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                            required size="30" id='username' placeholder="Email address" />
                        </div>
                        <div className='input-container'>
                        <label className='input-ele' htmlFor='password'>Password </label>
                        <input className='input-ele-box' type="password" id='password' placeholder="Password"/>
                        </div>
                        <button className='btn' type='button'  onClick={thankYouPage}>Create New Account</button>
                        <button className="btn create-new-account-btn" onClick={ChangeToLogin}>Log In</button>
                    </div>
                </div>
            </div>

        )
    
}



export default SignUp