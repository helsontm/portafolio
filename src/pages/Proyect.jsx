import { Link } from "react-router-dom"
const Proyect = () => {

    return(
    
      

<div className="box">


<div className="contImageFigura">
        
        <h4 className="aboutMe">My Project</h4>
       <img alt="cuadrado"  className="ImageIco" src='/triangulo.svg'/>
       </div>

      
       <div className="divProject">
       
      <div className="card">
        <Link to="https://e-comerce-equip.vercel.app/" target="#"><img className="otra"  src="ecomerce.png"></img></Link>
        <h3 className="title">E-COMMERCE</h3>
        <p className="Leyenda">Este proyecto fue desarrollado utilizando la tecnología React y se llevó a cabo de manera colaborativa en equipo. 
        La experiencia adquirida fue invaluable, 
        ya que nos enfrentamos a los desafíos y complejidades de gestionar un proyecto más amplio y retador.</p>
      </div>

      <div className="card">
        <Link to={"https://rick-morty-puce-three.vercel.app/"} target="#"><img className="otra"  src="rickandmorty.png"></img></Link>
        <h3 className="title">RICK AND MORTY</h3>
        <p className="Leyenda">Este proyecto se llevó a cabo utilizando la tecnología React, y se destacó por la implementación exitosa de la paginación. 
        La experiencia adquirida durante el desarrollo me
         permitió mejorar las habilidades en la gestión de contenido paginado, 
         lo que contribuyó significativamente al éxito del proyecto.</p>
      </div>

      <div className="card">
        <Link to={"https://weather-green-alpha.vercel.app/"} target="#"><img className="otra"  src="weather.png"></img></Link>
        <h3 className="title">WHEATHER</h3>
        <p className="Leyenda">Este proyecto fue desarrollado utilizando la tecnología React y se centró en el consumo de APIs para obtener información meteorológica. La implementación exitosa de la integración de APIs en el proyecto 
        me proporcionó valiosa experiencia en la obtención y gestión de datos en 
        tiempo real para ofrecer información precisa sobre el clima. </p>
      </div>
  
       </div>

       
        
       
    </div>
     
      
     
       
    )
    
    }
    export default Proyect