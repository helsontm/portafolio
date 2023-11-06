const About = () => {

return(

    <>

<div className="box">


<div className="contImageFigura">
        
      
        <h4 className="aboutMe">Contact me</h4>
       <img alt="cuadrado"  className="ImageIco" src='/circulo.svg'/>
       </div>

       <div className='parrafo'>
    <div className="divForm">
    <form action="/my-handling-form-page" method="post">
  <ul className="ulConcat">
    <li className="liConcat">
      <label for="name">Nombre:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li className="liConcat">
      <label for="mail">Correo electrónico:</label>
      <input type="email" id="mail" name="user_email" />
    </li>
    <li className="liConcat">
      <label for="msg">Mensaje:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>
    <li className="button">
  <button type="submit">Envíe su mensaje</button>
</li>
  </ul>
</form>
    </div>
        
       </div>
    
     
      
      </div>

    
    </>
)

}
export default About