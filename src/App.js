import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Engagement from './pages/Engagement';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/engagement' element={<Engagement/>} />
              <Route path='/profile' element={<Profile/>} />
              <Route path='/settings' element={<Settings/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
