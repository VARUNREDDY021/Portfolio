import React,{useContext} from 'react';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { UserContext } from './Components/Context/UserContext';






function App() {
  const {change,SetChange}=useContext(UserContext);
  
  return (
    
    <div className="App" style={{
      background : change ? "BLACK" : '',
      color: change ? 'white' : ''
    }}>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default App;
