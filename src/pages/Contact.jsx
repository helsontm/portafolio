import { FormattedMessage } from "react-intl";

const Contact=()=>{

    return(

        <>
        <div className="box">


<div className="contImageFigura">
        
                                 
        <h4 className="aboutMe"><FormattedMessage id="cont.aboutMe" defaultMessage={"Contactame"}/></h4>
       <img alt="cuadrado"  className="ImageIco" src='/circulo.svg'/>
       </div>

<div className="divContact">
       
    <div className="divForm">
        <form >
          <p>
            <label><FormattedMessage id="cont.form.name" defaultMessage={"Nombre"} /></label>
            <input type="text" name="nombre" required/>
          </p>
         
          <p>
            <label><FormattedMessage id="cont.form.mail" defaultMessage={"Correo"} /></label>
            <input type="email" name="email" required/>
          </p>
          
          <p className="full">
            <label><FormattedMessage id="cont.form.message" defaultMessage={"Mensaje"} /></label>
            <textarea name="mensaje" required></textarea>
          </p>
          <p className="full">
            <button className="boton-enviar"><FormattedMessage id="cont.form.submit" defaultMessage={"Enviar"} /></button>
          </p>
        </form>
   
    </div>
        
    </div>
  
    
     
      
      </div>
        </>
    )
}
export default Contact;