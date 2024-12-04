import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link,} from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import About from './Components/AboutUs/About.jsx';
import Contact from './Components/ContactUs/Contact.jsx';

const App = () => {
  return (
    <Router>
    <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact">CONTACTUS</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </Router>
    
  )
}

export default App