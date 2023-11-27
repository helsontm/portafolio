const Vitae=()=>{

    return(

        <div>

<nav>
<button className="nav__toggle">
            <i className="fa-solid fa-bars"></i>
        </button>
        <ul className="nav__menu ">
            <li className="nav__menu__item">
                <a href="" className="nav__link">
                   Inicio
                </a>
            </li>
            <li className="nav__menu__item">
                <a href="" className="nav__link">
                    Sobre Mi
                </a>
            </li>
            <li className="nav__menu__item">
                <a href="" className="nav__link">
                    Portafolio
                </a>
            </li>
            <li className="nav__menu__item">
                <a href="" className="nav__link">
                    Contacto
                </a>
            </li>
        </ul>
</nav>
<header>
<section className="first__section_header">
            <div className="header__principal__text">
                <h1>Helson Tafur</h1>
                <p>Full Stack.</p>
            </div>
            <div className="subtext__header">
                <span className="span__1">Back</span>
                <span className="span__2">end</span>
            </div>
            <div className="header__buttons">
                <div>
                    <a href="">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
               
            </div>
            <button className="contact__button">
                <i className="fa-solid fa-envelope"></i>
                <p>Contáctame</p>
            </button>
        </section>
        <section className="second__section_header">
            <img src="sobremi2.png" alt="header_img"/>
            <button className="contact__button">
                <i className="fa-solid fa-envelope"></i>
                <p>Contáctame</p>
            </button>
        </section>
</header>
<main>


<section className="first__section_main">
<div className="section__flex">
<div className="experience__and_skills">
                    <h2>
                      Sobre Mi
                    </h2>
                   
                </div>
                <div className="section__expirience">
                <h3>
                Soy un programador con experiencia en Front-End y Back-End, especializado en Excel avanzado, 
       gestión de bases de datos, desarrollo de aplicaciones web y software de escritorio. <br></br><br></br>
                    </h3>
                    <div className="experience__element">
                        
                        <div>
                            <h3>Además, tengo experiencia en ventas y atención al cliente, lo que me permite desarrollar aplicaciones 
       que satisfacen las necesidades comerciales y de los clientes. <br></br><br></br></h3>
                            
                        </div>
                    </div>
                    
                    <div className="experience__element">
                       
                        <div>
                            <h3>Mis habilidades incluyen el mantenimiento
        de software y hardware, instalación de sistemas operativos Windows, manejo de herramientas ofimáticas 
        y plataformas web.<br></br> </h3>
                            
                        </div>
                    </div>
                 
                    <div className="experience__element">
                        
                        <div>
                            <h3>Soy un colaborador eficaz en equipo, proactivo,
                                 flexible y comprometido con el aprendizaje continuo.</h3>
                         
                        </div>
                    </div>
                </div>
          </div>
          <div className="skills__element">
                <h3>
                    Habilidades
                </h3>
                <div className="skills__icons">
                    <div>
                        <img src="javascript.svg" alt="javascript"/>
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <img src="nodejs.png" alt="node"/>
                        <p>Node Js</p>
                    </div>
                    <div>
                        <img src="java.png" alt="java"/>
                        <p>java</p>
                    </div>
                    <div>
                        <img src="mysql.png" alt="Mysql"/>
                        <p>Mysql</p>
                    </div>
                    <div>
                        <img src="react1.gi" alt="Mysql"/>
                        <p>react</p>
                    </div>
                </div>
            </div>
</section>
<section className="second__section_main">
            <h2>
                Portafolio
            </h2>
            <div className="img__correction">
                <p>E-commerce</p>
            <img src="ecomerce.png" className="imgEcommerce"></img>
            </div>
            <div>
                <p>Rick And Morty</p>
                <img src="./assets/img/ejemplo 1.png" alt=""/>
            </div>
            <div>
                <p>The Weither</p>
                <img src="./assets/img/ejemplo 2.png" alt=""/>
            </div>
        </section>
        <section className="third__section_main">
            <h2>
                Contacto
            </h2>
            <div className="contact__section">
                <div className="contact__elements">
                    <div>
                        <img src="github.png" alt="phone"/>
                    </div>
                    <h4>Número celular</h4>
                    <p>5526895424</p>
                </div>
                <div className="contact__elements">
                    <div>
                        <img src="linkedin.png" alt="mail"/>
                    </div>
                    <h4>Email</h4>
                    <p>corre@correo.com</p>
                </div>
            </div>
        </section>
</main>
<footer>
        <p>Hecho By Helson Tafur</p>
    </footer>

    <script src="./assets/js/main.js"></script>
</div>



    );

}

export default Vitae;