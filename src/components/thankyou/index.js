import './index.css'
import { useNavigate } from 'react-router-dom'

const ThankYou = () => {

    const navigate = useNavigate()
    const redirectToLogin = () => {
        navigate('/login')
    }

    return(
    <div className="thankyou-container">
        <div className='inner-thank-you'>
        <h1>Thank you your profile is created</h1>
        <p className='para-thank'>Now you can login ⇓</p>
        <button className='thank-btn' onClick={redirectToLogin}> ↠ Login</button>
        </div>
    </div>
)
}

export default ThankYou