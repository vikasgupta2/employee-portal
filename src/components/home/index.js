import './index.css'
import Header from '../header'

const Home = () => {
    return(
        <div className='home-container'>
            <div className='profile-container'>
                <img className='user-profile' src="https://i.ibb.co/SNqJzQG/IMG-20230217-WA00521.jpg" alt="vikas-profile"/>
                <h1>Vikas Gupta</h1>
                <p>Profile: Software Engineer</p>
                <p>Mail: vikasgupta6@outlook.com</p>
                <p>About: I am Aspiring full stack developer having hands on practical knowledge of HTML, CSS, Javascript, Node JS, Express JS, React. I am good at python programming, solved more than 800+ coding problem in CCBP Nxtwave platform.</p>
                <button className='change-profile'>Edit Profile</button>
            </div>
            <div className='employee-detail-container'>
                <Header/>
                <div className='task-container'>
                    <div className='task-assigned'>
                        <h1>Current Task</h1>
                        <ul>
                            <li>Working on abc company website</li>
                            
                        </ul>
                    </div>
                    <div className='task-assigned'>
                        <h1>Pending Task</h1>
                        <ul>
                            <li>create a e-commerce website</li>
                            <li>add a new feature in abc website</li>
                        </ul>
                    </div>
                    <div className='task-assigned'>
                        <h1>Completed Task</h1>
                        <ul>
                            <li>created ybc company website</li>
                            <li>created a e-commerce website</li>
                            
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home