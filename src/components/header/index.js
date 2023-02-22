import './index.css'

import {Link, useNavigate} from 'react-router-dom'


const Header = () => {

    const navigate = useNavigate()
    const onClickLogout = () => {
       navigate('/login')
      }

    return(
    <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://i.ibb.co/JFMfcgd/logog.png"
        alt="website logo"
      />
      <ul className="nav-menu">
        <Link to="/my-details" className="nav-link">
          <li>Profile</li>
        </Link>
        <Link to="/pending-task" className="nav-link">
          <li>All Task</li>
        </Link>
        <Link to="/slack" className="nav-link">
          <li>Slack</li>
        </Link>
      </ul>
      <button
        type="button"
        className="logout-desktop-btn"
        onClick={onClickLogout}
      >
        Logout
      </button>
    </div>
  </nav>
)
}

export default Header