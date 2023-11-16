import { HashRouter, Routes, Route, Link } from "react-router-dom";


import {  useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Proyect from "./pages/Proyect";
import Contact from "./pages/Contact";
import './App.css'


function App() {
  /*Para Traducir  */
  
  



  /* Funcion para cambiar de color el fondo  */
  const [isOn, setIsOn] = useState(false);

  const changeBulb = () => {
      setIsOn(
          document.body.classList.toggle("dark-mode")  
      );
  }


  
  return (
    <>
     
     <HashRouter>
      {/* Se declara el Header de la pagina */}
     <main>
     
         <div className='header'>
          {/*div de los iconos pequeños */}
          <div>
          <img   className="IconoM" src='/cuadrado.svg'/>
          <img   className="IconoM" src='/triangulo.svg'/>
          <img   className="IconoM" src='/circulo.svg'/>
          </div>

          <div className="titlehead">
          <h3>-----</h3>
          </div>
     
        <div>
        <input id="checkitem" type="checkbox"  onClick={changeBulb}/>
        <select >
      <option value="es">Spanish</option>
      <option value="en">English</option>
      {/* Add more language options */}
    </select>
        </div>
        
        
      </div>

      <div className="menu">
        <header>
          <nav>
        <ul>           {/*Link con el nombre de las rutas  */}
        <Link className="link" to="/"><li className="liHome">INICIO</li></Link>{/* stilo del home  */}
        <Link className="link" to="/about"><li className="liAbout">SOBRE MI</li></Link>
       <Link className="link" to="/project"> <li className="liProject">PROJECTOS</li></Link>
        <Link className="link" to="/contact"><li className="liContact">CONTÁCTAME</li></Link>
        </ul>
        </nav>
        </header>
        
      </div>
      
</main>
{/*Las rutas  */}
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Proyect/>}/>
          <Route path="/contact" element={<Contact/>}>
           
          </Route>

          
        </Routes>
       {/*El footer de la pagina*/}
        <footer>
        <div>
          <img   className="IconoM" src='/cuadrado.svg'/>
          <img   className="IconoM" src='/triangulo.svg'/>
          <img   className="IconoM" src='/circulo.svg'/>
          </div>
          <div>
          <h5 className="h5Footer">Desarrollador Web FULL STACK</h5>
          </div >
<div className="contIconFooter">     
          <a href="https://github.com/helsontm" target="blank"><img  className="icoFooter" title="GIT" src='github.png'/></a>
          <a href="https://www.linkedin.com/in/helson-tafur-manchego" target="blank">
            <img  className="icoFooter"  title="LINKEDIN" src='linkedin.png'/></a>
          </div>
        
        </footer>

      </HashRouter>

   
      
      
    </>
  )
}

export default App
