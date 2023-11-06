import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Proyect from "./pages/Proyect";

import './App.css'

function App() {
  
  return (
    <>
     
     <HashRouter>
      {/* Se declara el Header de la pagina */}
     <main>
     
         <div className='header'>
        <div>
    <h1 className='title'>HELSON YAIR TAFUR MANCHEGO</h1>
        </div>
      </div>

      <div className="menu">
        <header>
          <nav>
        <ul>           {/*Link con el nombre de las rutas  */}
        <Link className="link" to="/"><li className="liAbout">ABOUT</li></Link>
       <Link className="link" to="/project"> <li className="liProject">PROJECTS</li></Link>
        <Link className="link" to="/contact"><li className="liContact">CONTACT</li></Link>
        </ul>
        </nav>
        </header>
        
      </div>
      
</main>

        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Proyect/>}/>
          <Route path="/contact" element={<About/>}>
           
          </Route>

          
        </Routes>
       
        <footer>
          <div>
          <h5 className="h5Footer">Desarrollador Web FULL STACK</h5>
          </div >
<div className="contIconFooter">     
          <a href="https://github.com/helsontm" target="blank"><img  className="icoFooter" title="GIT" src='github.png'/></a>
          <a href="https://www.linkedin.com/in/helson-tafur-manchego" target="blank">
            <img  className="icoFooter"  title="LINKEDIG" src='linkedin.png'/></a>
          </div>
        </footer>

      </HashRouter>

   
      
      
    </>
  )
}

export default App
