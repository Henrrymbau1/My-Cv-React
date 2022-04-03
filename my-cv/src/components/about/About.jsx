import React from 'react'
import "./about.css"

function About() {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://i.pinimg.com/736x/b7/37/50/b73750980a63d0600d91b9c125011041.jpg" alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">VOX es la voz de la España Viva. Un movimiento de extrema necesidad que nace para poner a las instituciones al servicio de los españoles, en contraste con el actual modelo que pone a los españoles al servicio de los políticos</p>
            <p>VOX es el partido del sentido común, el que pone voz a lo que piensan millones de españoles en sus casas; el único que lucha contra la corrección política asfixiante. En VOX no les decimos a los españoles cómo tienen que pensar, hablar o sentir, les decimos a los medios y a los partidos que dejen de imponer sus creencias a la sociedad.</p>
            <div>
              <ul className="icon-list">
                <li><img className="icon-item" src="https://img.icons8.com/color/480/html-5--v1.png" alt="HTML"/></li>
                <li><img className="icon-item" src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS"/></li>
                <li><img className="icon-item" src="https://images.vexels.com/media/users/3/166403/isolated/preview/a5a33bf3004830a2bd581e9fa65de660-icono-del-lenguaje-de-programacion-javascript.png" alt="JavaScript"/></li>
                <li><img className="icon-item" src="https://zwestgroup.com/static/img/stack/react.png" alt="React"/></li>
                <li><img className="icon-item" src="https://www.edlibre.com/wp-content/uploads/nodejs-34c5f8cc37f0756108c490a903d80176.png" alt="NodeJs"/></li>
              </ul>
            </div>
        </div>
        
    </div>
  )
}

export default About