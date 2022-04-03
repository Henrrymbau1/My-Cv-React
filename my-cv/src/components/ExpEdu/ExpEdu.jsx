import React from 'react'
import "./expedu.css"
import { useState } from "react";
import Education from '../education/Education';
import Experience from '../experience/Experience';

const ExpEdu = () => {
    const [showEducation, setShowEducation] = useState(true)
  return (
    <div className="exed">
        <div className="exed-text">
            <h1 className="exed-title">Experiencia/Educación</h1>
            <p className="exed-desc">
                Debajo de este parrafo tengo que colocar los botones de experiencia y educacion  y cuando se pulse 
                cada boton, tiene que cambiar la informacion y aparecer los contenidos de cada uno
            </p>
        </div>
        <div className="exed-Buttons">
            <button className="edu-btn" onClick={() => setShowEducation(true)}>
              Education
            </button>
            <button className="exp-btn" onClick={() => setShowEducation(false)}>
              Experience
            </button>
        </div>
        <div switch-container>
          { showEducation? showEducation : showEducation }
        </div>
        
    </div>
  )
}

export default ExpEdu