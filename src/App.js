import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SignIn from './pages/Signin/SignIn';
import SignUp from './pages/Signup/SignUp';
import Explore from './pages/explore/Explore';
import Levelup from './pages/LevelUp/LevelUp';
import MoodChecker from './pages/Moodchecker/MoodChecker';
import Happy from './pages/Happy/Happy';
import Services from './pages/Services/Services';
function App() {
  return (
      <Router>
        {/* <Home/> */}
        <div>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/explore' element={<Explore/>} />
          <Route path='/levelup' element={<Levelup/>} />
          <Route path='/moodchecker' element={<MoodChecker/>} />
          <Route path='/happy' element={<Happy/>} />
          <Route path='/services' element={<Services/>}/>
          </Routes>
        
        </div>
      </Router>
    
  );
  
}

export default App;
