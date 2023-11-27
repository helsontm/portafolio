const Contact=()=>{

    return(

        <>
        <div className="box">


<div className="contImageFigura">
        
      
        <h4 className="aboutMe">Contactame</h4>
       <img alt="cuadrado"  className="ImageIco" src='/circulo.svg'/>
       </div>

<div className="divContact">
       
    <div className="divForm">
        <form >
          <p>
            <label>Nombre</label>
            <input type="text" name="nombre" required/>
          </p>
         
          <p>
            <label>Correo</label>
            <input type="email" name="email" required/>
          </p>
          
          <p className="full">
            <label>Mensaje</label>
            <textarea name="mensaje" required></textarea>
          </p>
          <p className="full">
            <button className="boton-enviar">Enviar</button>
          </p>
        </form>
   
    </div>
        
    </div>
  
    
     
      
      </div>
        </>
    )
}
export default Contact;