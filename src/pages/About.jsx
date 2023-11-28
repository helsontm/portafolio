import { FormattedMessage } from "react-intl";
const About = () => {

return(

    <>
<div className="box">
      
      
      <div className="contImageFigura">
       
     
       <h4 className="aboutMe"><FormattedMessage id="about.aboutMe" defaultMessage={"Sobre Mi"}/></h4>
      <img alt="cuadrado"  className="ImageIco" src='/cuadrado.svg'/>
      </div>

    <div>
    
     <div className='parrafo'>
       <p>
       <FormattedMessage id="about.parrafe" defaultMessage={`
        Soy un programador con experiencia en Front-End y Back-End, especializado en Excel avanzado, 
        gestión de bases de datos, desarrollo de aplicaciones web y software de escritorio. 
        
        Además, tengo experiencia en ventas y atención al cliente, lo que me permite desarrollar aplicaciones 
        que satisfacen las necesidades comerciales y de los clientes.
        Mis habilidades incluyen el mantenimiento
         de software y hardware, instalación de sistemas operativos Windows, manejo de herramientas ofimáticas 
         y plataformas web.
        Soy un colaborador eficaz en equipo, proactivo, flexible y comprometido con el aprendizaje continuo.
       `}/>
      
       </p>
     </div>

     <div className="contImages">
   {/*   <img className="iconPython" title="PYTHON" src='/python.svg'/> */}
     <img className="iconJavascript" title="JAVASCRIPT" src='/javascript.svg'/>

     <img  className="iconNode" title="NODEJS"   src="nodejs.png"/>

     <img className="iconJava" title='JAVA' src='java.png'/>
      <img className="iconMysql" title="MYSQL" src='mysql.png'/>

       <img className='ImgReact' title="REACTJS" src="/react1.gif"/>  
       
     </div>
     </div>
   
       
     </div>


    
    </>
)

}
export default About