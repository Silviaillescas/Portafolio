import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h1>Proyectos Realizados</h1>
      <div className="project-grid">
        <div className="project">
          <h2>Proyecto 1</h2>
          <p>Proyecto de una página web a un emprendimiento de artículos personalizables</p>
          <a href="https://github.com/Diegoval-Dev/MK-Publicidad.git">GitHub Link</a>
        </div>
        <div className="project">
          <h2>Proyecto 2</h2>
          <p>Sitio web de simulación de un restaurante</p>
          <a href="https://github.com/michellemej22596/ProyectoBD.git">GitHub Link</a>
        </div>
        <div className="project">
          <h2>Proyecto 3</h2>
          <p>Blog</p>
          <a href="https://proyectoblogsilviaillescas.netlify.app/">Netlify Link</a>
        </div>
        <div className="project">
          <h2>Proyecto 4</h2>
          <p>Calculadora con tests</p>
          <a href="https://lab07-calculadora.netlify.app/">Netlify Link</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
