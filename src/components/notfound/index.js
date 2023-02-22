import { useNavigate } from 'react-router-dom'
import './index.css'


const NotFound = () => {
    const navigate = useNavigate()
    const backToLogin = () => {
        navigate('/home')
    }
    return(
<div className="not-found-container">
    <img className='not-found-img' src="https://i.ibb.co/Kh5Brtg/not.png" alt="not-found"/>
    <button className='btn-not-found' onClick={backToLogin}>Back to home page</button>
</div>
)
    }

export default NotFound