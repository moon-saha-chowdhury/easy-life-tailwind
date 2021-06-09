import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import { useEffect, useState } from 'react';
import Dropdown from './Components/Dropdown';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <Router>
     <Navbar toggle={toggle}/>
     <Dropdown isOpen={isOpen} toggle={toggle}/>
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="/about">
         <About/>
       </Route>
       <Route path="/menu">
         <Menu/>
       </Route>
     </Switch>
     <Footer/>
    </Router>
  );
}

export default App;
