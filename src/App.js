import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Support from './components/Support';
import Labs from './components/Labs';
import About from './components/About';
import { NavLink } from 'react-router-dom';
import MainHeader from './components/MainHeader';


function App() {


  return (
    <div className="App">
        
    <ul>
      <li>
        <NavLink to="/"> Home</NavLink> <br/>
        <NavLink to="/about"> About</NavLink>  <br/>
        <NavLink to="/labs"> Labs</NavLink>  <br/>
        <NavLink to="/support" > Support</NavLink>
        </li>

    </ul>


        <Routes>
          <Route path="/" element = {<MainHeader></MainHeader>}>
            
            {/* Default Route */}
            
            <Route index element = {<Homepage></Homepage>} />
            <Route path="/support" element = {<Support></Support>}></Route>  
            <Route path="/labs" element = {<Labs></Labs>}></Route>  
            <Route path="/about" element = {<About></About>}></Route>  
            <Route path="*" element = {<div>Not found</div>}></Route> 
          </Route>   
        </Routes>
    </div>
  );
}

export default App;
