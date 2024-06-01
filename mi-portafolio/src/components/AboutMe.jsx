import React from 'react';
import './AboutMe.css';


function AboutMe() {
  return (
    <div className="about-me-container">
      <h1 className="fade-in-left">¡Hola, soy Silvia Illescas!</h1>
      <p className="fade-in-left delay-1s">
        Tengo 20 años y actualmente estoy en mi tercer año de estudios en la Universidad del Valle. Me apasiona el desarrollo web y tengo habilidades en JavaScript, React, CSS y HTML. Siempre estoy buscando nuevas oportunidades para aprender y expandir mis habilidades.
      </p>
      <p className="fade-in-left delay-2s">
        En mi tiempo libre, me gusta explorar nuevas tecnologías y trabajar en proyectos personales que me permiten aplicar lo que he aprendido y descubrir nuevas herramientas y técnicas.
      </p>
      <p className="fade-in-left delay-3s">
        ¡Gracias por visitar mi portafolio y conocer un poco sobre mí!
      </p>
    </div>
  );
}

export default AboutMe;
