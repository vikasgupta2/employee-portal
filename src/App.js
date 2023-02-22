
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Login from './components/login'
import Home from './components/home'
import SignUp from './components/signup';
import NotFound from "./components/notfound";
import ThankYou from "./components/thankyou";

const App =()=>(
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<SignUp/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/thank-you" element={<ThankYou/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )


export default App;
