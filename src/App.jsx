import { HashRouter, Routes, Route, Link } from "react-router-dom";

//importaciones para traducir 
import { IntlProvider } from 'react-intl';
import spanish from './translations/es.json';
import english from './translations/en.json';
import { FormattedMessage } from "react-intl";

import {  useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Proyect from "./pages/Proyect";
import Contact from "./pages/Contact";

import './App.css'


function App() {
  /*Para Traducir  */
  const [ locale, setLocale ] = useState('es')
  const [ language, setLanguage ] = useState(false);
   
  const handleLanguages = (e) => {
    setLocale(e.target.value)
    if(e.target.value === "es"){
      setLanguage(true)

    } else {
      setLanguage(false)

    }}


  /* Funcion para cambiar de color el fondo  */
  const [isOn, setIsOn] = useState(false);

  const changeBulb = () => {
      setIsOn(
          document.body.classList.toggle("dark-mode")  
      );
  }


  
  return (
    
     //componente para traducir
    <IntlProvider messages={locale === 'es' ? spanish : english}   locale={locale}>
      <HashRouter>
      { /*Se declara el Header de la pagina*/ }
     <main>
     
         <div className='header'>
          { /*div de los iconos pequeños */}
          <div>
          <img   className="IconoM" src='/cuadrado.svg'/>
          <img   className="IconoM" src='/triangulo.svg'/>
          <img   className="IconoM" src='/circulo.svg'/>
          </div>

          <div className="divSelect">
        <select 
              onChange={handleLanguages}
              value={locale}>
                <option value="es"><FormattedMessage id="app.appLang.languageEs" defaultMessage={"Español"} /></option>
                <option value="en"><FormattedMessage id="app.appLang.languageEn" defaultMessage={"Inglés"} /></option>
              </select>
    </div>
     
        <div className="divcheckbox" >
          <div className="divCheck">
        <input id="checkitem" type="checkbox"  onClick={changeBulb}/>
        </div>
      
        </div>
        
        
      </div> 

      <div className="menu">
        <header>
          <nav>
        <ul>           {/*Link con el nombre de las rutas*/ }
        <Link className="link" to="/"><li className="liHome"><FormattedMessage id="app.nav.home" defaultMessage={"INICIO"} /></li></Link>{/*stilo del home */ }
        <Link className="link" to="/about"><li className="liAbout"><FormattedMessage id="app.nav.about" defaultMessage={"SOBRE MI"} /></li></Link>
       <Link className="link" to="/project"> <li className="liProject"><FormattedMessage id="app.nav.project" defaultMessage={"PROYECTOS"} /></li></Link>
        <Link className="link" to="/contact"><li className="liContact"><FormattedMessage id="app.nav.contact" defaultMessage={"CONTACTAME"} /></li></Link>
        </ul>
        </nav>
        </header>
        
      </div>
      
</main>
{/* Las rutas */ }
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
      </IntlProvider>

  )
}


export default App
